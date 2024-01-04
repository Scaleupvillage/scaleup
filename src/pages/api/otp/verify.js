import dbConnect from "../db";
import OTP from "../db/model/Otp";
import bcrypt from "bcrypt";
import Registration from "../db/model/Registration";
import axios from "axios";

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;

  const verifyOtp = async (req, res) => {
    try {
      const { otp, phoneNumber } = req.body;
      const otpInfo = await OTP.findOne({ phoneNumber });
      if (otpInfo) {
        const verified = await bcrypt.compare(otp, otpInfo.otp);
        if (verified) {
          const registrartion = await Registration.findOne({
            phoneNumber,
          });
          if (registrartion) {
            return res
              .status(400)
              .json({ message: "Already registered with given phone number" });
          }
          const newRegistrartion = await Registration.create(req.body);

          axios
            .post(
              "https://api.buildnship.in/makemypass/rsvp/submit/d1929bdb-c891-4850-8c41-4097ae2c6c7f/",
              {
                name: newRegistrartion.name,
                email: newRegistrartion.email,
                phone_number: newRegistrartion.phoneNumber,
                district: newRegistrartion.district,
                organization: newRegistrartion.company,
                category: newRegistrartion.category,
              }
            )
            .then((response) => {
              return res.status(200).json({ message: "Successfull" });
            })
            .catch((err) => {
              console.log(err.response);
              return res.status(400).json({ message: "Something went wrong" });
            });
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
      verifyOtp(req, res);
      break;
  }
}
