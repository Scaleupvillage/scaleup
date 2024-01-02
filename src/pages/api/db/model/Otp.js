import mongoose from "mongoose";
const schema = mongoose.Schema;

const OTPschema = new schema(
  {
    phoneNumber: {
      type: String,
      unique: true,
    },
    otp: {
      type: String,
      require: true,
    },
    expireAt: Date,
  },
  { timestamps: true }
);

const OTP = mongoose.models.OTP || mongoose.model("OTP", OTPschema);

module.exports = OTP;
