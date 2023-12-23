import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
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
});
const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
