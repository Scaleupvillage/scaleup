import dbConnect from "../db";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const client = require("twilio")(
  process.env.TWILIO_ACC_SSID,
  process.env.TWILIO_AUTH_ID
);
export default async function handler(req, res) {
  await dbConnect();
  const sentVerificationOtp = (Contact) => {
    return new Promise((resolve, reject) => {
      client.verify.v2
        .services(process.env.TWILIO_AUTHY_SERVICEID)
        .verifications.create({ to: `+91${Contact}`, channel: "sms" })
        .then((verification) => {
          console.log(verification.status);
          resolve(verification);
        })
        .catch((error) => {
          console.log(error.message);
          reject(error);
        });
    });
  };
  const verifyPhoneOtp = (Contact, otp) => {
    return new Promise((resolve, reject) => {
      client.verify.v2
        .services(process.env.TWILIO_AUTHY_SERVICEID)
        .verificationChecks.create({ to: `+91${Contact}`, code: otp })
        .then((verification_check) => {
          console.log(verification_check);
          console.log(verification_check.status, "STATUS");
          resolve(true);
        })
        .catch((error) => {
          reject(false);
        });
    });
  };
  const { method } = req;
  const { contact } = req.params;
  console.log(contact);
  switch (method) {
    case "GET":
      // sentVerificationOtp(contact);
      break;
    case "POST":
      break;
  }
}
