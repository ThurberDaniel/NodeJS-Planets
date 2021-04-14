import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Moon = new Schema(
  {
    name: { type: String, required: true },
    size: { type: String, required: true },
    color: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Moon;
