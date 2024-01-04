import dbConnect from "../db";
import OTP from "../db/model/Otp";
import bcrypt from "bcrypt";


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
          return res
            .status(400)
            .json({ message: "OTP is valid", status: true });
        } else {
          return res
            .status(400)
            .json({ message: "Invalid otp", status: false });
        }
      } else {
        return res
          .status(400)
          .json({ message: "Please verify the otp ", status: false });
      }
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Something went wrong", status: false });
    }
  };

  switch (method) {
    case "POST":
      verifyOtp(req, res);  
      break;
  }
}
