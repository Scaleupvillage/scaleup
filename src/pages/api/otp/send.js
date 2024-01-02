import axios from "axios";
import dbConnect from "../db";
import OTP from "../db/model/Otp";
import bcrypt from "bcrypt";
import moment from "moment";
import Registration from "../db/model/Registration";
export default async function handler(req, res) {
  await dbConnect();

  const sendOTP = async (req, res, phoneNumber) => {
    try {
      if (!phoneNumber) {
        throw Error("Provide proper phone number");
      }
      let registrationData = await Registration.findOne({ phoneNumber });
      if (registrationData) {
        console.log("hereeeeee");
        return res
          .status(400)
          .json({ message: "Phone number is already verified" });
      }
      //clear previous records
      await OTP.deleteOne({ phoneNumber: phoneNumber });

      //generate pin
      const generatedPin = Math.floor(Math.random() * 1000000);

      //save otp record
      const hashedOTP = await bcrypt.hash(`${generatedPin}`, 10);
      axios
        .get(
          `http://sms.firstdial.info/sendsms?uname=scaleup&pwd=scaleup2023&senderid=MUDRch&to=${phoneNumber}&msg=${generatedPin} is your verification code for registering in to the ScaleUp Conclave 2024.'ScaleUp' -mudra charitable foundation&route=T&peid=1701170359349901591&tempid=1707170409806746315`
        )
        .then(async (response) => {
          const newOTP = await new OTP({
            phoneNumber,
            otp: hashedOTP,
            expireAt: moment().add(10, "minutes"),
          });
          const createdOTPRecord = await newOTP.save();
          if (createdOTPRecord)
            return res.status(200).json({ message: "OTP send successfully" });
          else return res.status(400).json({ message: "Something went wrong" });
        })
        .catch((err) => {
          console.log(err);
          return res.status(400).json({ message: "Something went wrong" });
        });
    } catch (error) {
      console.log("error send otp", error.message);
      throw error;
    }
  };

  const { method } = req;
  const { phoneNumber } = req.body;
  // log
  switch (method) {
    case "POST":
      sendOTP(req, res, phoneNumber);
      break;
  }
}
