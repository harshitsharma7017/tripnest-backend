import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  bookingType: {
    type: String,
    enum: ["Flight", "Train", "Bus", "Cab"],
    required: true,
  },

  referenceId: { type: mongoose.Schema.Types.ObjectId, required: true }, // ID of the actual service

  amountPaid: { type: Number, required: true },
  paymentId: { type: String }, // can link to payment gateway txn ID

  status: {
    type: String,
    enum: ["Confirmed", "Cancelled", "Pending"],
    default: "Pending",
  },

  bookingDate: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);
