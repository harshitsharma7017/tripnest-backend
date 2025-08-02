import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: mongoose.Schema.Types.ObjectId, ref: "City", required: true },
  pricePerNight: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  amenities: [String],
  images: [String],
  description: String
});

export default mongoose.model("Hotel", hotelSchema);
