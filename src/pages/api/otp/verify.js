import dbConnect from "../db";
import OTP from "../db/model/Otp";
import bcrypt from "bcrypt";
import Registration from "../db/model/Registration";

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
          const user = await Registration.create(req.body);
          return res.status(200).json({ message: "Successfull" });
        } else {
          res.status(400).json({ message: "Invalid otp" });
        }
      } else {
        res.status(400).json({ message: "otp not found" });
      }
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({ message: "Something went wrong" });
    }
  };

  switch (method) {
    case "POST":
      verifyOtp(req, res);
      break;
  }
}
