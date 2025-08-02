import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  name: String,
  state: String,
  country: String,
  description: String,
  images: [String]
});

export default mongoose.model("City", citySchema);
