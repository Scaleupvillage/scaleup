import dbConnect from "./db";
import Contact from "./db/model/User";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const client = require("twilio")(
  process.env.TWILIO_ACC_SSID,
  process.env.TWILIO_AUTH_ID
);
export default async function handler(req, res) {
  await dbConnect();

  const verifyPhoneOtp = (Contact, otp) => {
    return new Promise((resolve, reject) => {
      client.verify.v2
        .services(process.env.TWILIO_AUTHY_SERVICEID)
        .verificationChecks.create({ to: `+91${Contact}`, code: otp })
        .then((verification_check) => {
          console.log(verification_check);
          if (verification_check.status) resolve(true);
          else reject(false);
        })
        .catch((error) => {
          reject(false);
        });
    });
  };
  const { method } = req;
  const { phoneNumber, otp } = req.body;

  switch (method) {
    case "POST":
      verifyPhoneOtp(phoneNumber, otp)
        .then(async () => {
          try {
            const user = await Contact.create(req.body);
            return res.status(200).json({ message: "Successfull" });
          } catch (err) {
            return res.status(400).json({ message: "Something went wrong" });
          }
        })
        .catch((err) => {
          return res.status(400).json({ message: "Please enter a valid OTP" });
        });
      break;
  }
}
