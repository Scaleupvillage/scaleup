import dbConnect from "../db";
import OTP from "../db/model/Otp";
import bcrypt from "bcrypt";
import Registration from "../db/model/Registration";
import axios from "axios";

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;

  const registerNewData = async ({ req, res, phoneNumber, email }) => {
    const registeredWithPhone = await Registration.findOne({
      phoneNumber,
    });
    const registeredWithEmail = await Registration.findOne({
      email,
    });
    if (process.env.ENVIRONMENT === "production") {
      if (registeredWithPhone) {
        return res
          .status(400)
          .json({ message: "Already registered with given phone number" });
      }
      if (registeredWithEmail) {
        return res
          .status(400)
          .json({ message: "Already registered with given email" });
      }
    }

    axios
      .post(
        `${process.env.MAIL_BASE_URL}/makemypass/rsvp/submit/d1929bdb-c891-4850-8c41-4097ae2c6c7f/`,
        {
          name: req.body.name,
          email: req.body.email,
          phone_number: req.body.phoneNumber,
          district: req.body.district,
          organization: req.body.company,
          category: req.body.category,
        }
      )
      .then(async (response) => {
        const newRegistrartion = await Registration.create({
          ...req.body,
          regId: response.data.response.code,
        });
        axios
          .get(
            `http://sms.firstdial.info/sendsms?uname=scaleup&pwd=scaleup2023&senderid=MUDRch&to=${req.body.phoneNumber}&msg=Thank you for registering in scaleup. ${newRegistrartion.regId} is your registration id. You can use this message/mail as entry card at event venue. &route=T&peid=1701170359349901591&tempid=1707170409806746315`
          )
          .then(async (response) => {})
          .catch((err) => {
            console.log(err);
          });
        return res.status(200).json({ message: "Successfull" });
      })
      .catch((error) => {
        console.log(error.response.data.response);
        let err = error.response.data.response;
        if (err.email) {
          return res.status(400).json({ message: "Email id already exists" });
        } else if (err.phone_number) {
          return res
            .status(400)
            .json({ message: "Phone number already exists" });
        } else if (err.phone_number) {
          return res
            .status(400)
            .json({ message: "Phone number already exists" });
        }
        return res.status(400).json({ message: "Something went wrong" });
      });
  };
  const verifyOtp = async (req, res) => {
    try {
      const { otp, phoneNumber } = req.body;
      const otpInfo = await OTP.findOne({ phoneNumber });
      if (otpInfo) {
        const verified = await bcrypt.compare(otp, otpInfo.otp);
        if (verified) {
          registerNewData({ req, res, phoneNumber });
        } else {
          return res.status(400).json({ message: "Invalid otp" });
        }
      } else {
        return res.status(400).json({ message: "otp not found" });
      }
    } catch (error) {
      return res.status(400).json({ message: "Something went wrong" });
    }
  };

  switch (method) {
    case "POST":
      // verifyOtp(req, res);
      registerNewData({
        req,
        res,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
      });
      break;
  }
}
