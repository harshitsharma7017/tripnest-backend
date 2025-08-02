import mongoose from 'mongoose';

const flightSchema = new mongoose.Schema({
  airline: { type: String, required: true },
  flightNumber: { type: String, required: true },
  sourceAirport: { type: String, required: true },
  destinationAirport: { type: String, required: true },
  departureTime: { type: Date, required: true },
  arrivalTime: { type: Date, required: true },
  duration: { type: String }, // Optional, or you can calculate
  price: { type: Number, required: true },
  availableSeats: { type: Number, default: 0 },
  classType: { type: String, enum: ['Economy', 'Business', 'First'], default: 'Economy' },
  baggageAllowance: { type: String },
  stops: [{ type: String }], // List of stop airports
}, { timestamps: true });

export default mongoose.model('Flight', flightSchema);
