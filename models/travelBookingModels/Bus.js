import mongoose from "mongoose";

const busSchema = new mongoose.Schema({
  operatorName: { type: String, required: true },
  busType: { type: String, enum: ['AC', 'Non-AC', 'Sleeper', 'Seater'], required: true },
  sourceCity: { type: String, required: true },
  destinationCity: { type: String, required: true },
  departureTime: { type: Date, required: true },
  arrivalTime: { type: Date, required: true },
  price: { type: Number, required: true },
  totalSeats: { type: Number, required: true },
  availableSeats: { type: Number, required: true },
  boardingPoints: [String],
  droppingPoints: [String]
}, { timestamps: true });

export default mongoose.model('Bus', busSchema);
