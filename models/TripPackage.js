import mongoose from "mongoose";

const tripPackageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  city: { type: mongoose.Schema.Types.ObjectId, ref: "City", required: true },
  duration: String,
  price: { type: Number, required: true },
  inclusions: [String]
});

export default mongoose.model("TripPackage", tripPackageSchema);
