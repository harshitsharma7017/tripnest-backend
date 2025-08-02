import mongoose from "mongoose";

const cabBookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  pickupLocation: { type: String, required: true },
  dropLocation: { type: String, required: true },
  cabType: { type: String, enum: ['Sedan', 'SUV', 'Hatchback'], required: true },
  pickupTime: { type: Date, required: true },
  estimatedFare: { type: Number, required: true },
  status: {
    type: String,
    enum: ['Booked', 'Ongoing', 'Completed', 'Cancelled'],
    default: 'Booked'
  },
}, { timestamps: true });

export default mongoose.model('CabBooking', cabBookingSchema);
