import dbConnect from "../db";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const client = require("twilio")(
  process.env.TWILIO_ACC_SSID,
  process.env.TWILIO_AUTH_ID
);
const textflow = require("textflow.js");

textflow.useKey(
  "BhHJczxFZOBwqOjmiLqCVF8SjWLvSKhCxK4HSNKzbLAQPS9UJvJ0G0p7C7GBQeUk"
);
export default async function handler(req, res) {
  await dbConnect();
  const sentVerificationOtp = async (Contact) => {
    let result = await textflow.sendVerificationSMS("+918137886298");
    return res.status(result.status).json(result.message);
  };

  const { method } = req;
  const contactNumber = reg.body;
  switch (method) {
    case "POST":
      sentVerificationOtp(contactNumber);
      break;
  }
}
