import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email"]
    },
    phone: {
      type: String,
      required: true
    },
    message: {
      type: String
    }
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
