import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
const registrationSchema = new mongoose.Schema({
  redId: {
    type: Number,
    default: 10000,
  },
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  category: {
    type: String,
  },
  company: {
    type: String,
  },
  isVerified: { type: Boolean, default: false },
});
const Registration =
  mongoose.models.Registration ||
  mongoose.model("Registration", registrationSchema);
// registrationSchema.plugin(autoIncrement.plugin, {
//   model: "Registration",
//   field: "redId",
//   startAt: 10000,
//   incrementBy: 1,
// });

export default Registration;
