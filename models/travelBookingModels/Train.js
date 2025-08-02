import mongoose from "mongoose";

const trainSchema = new mongoose.Schema({
  trainName: { type: String, required: true },
  trainNumber: { type: String, required: true },
  sourceStation: { type: String, required: true },
  destinationStation: { type: String, required: true },
  departureTime: { type: Date, required: true },
  arrivalTime: { type: Date, required: true },
  availableSeats: {
    sleeper: Number,
    ac3: Number,
    ac2: Number,
    ac1: Number
  },
  fare: {
    sleeper: Number,
    ac3: Number,
    ac2: Number,
    ac1: Number
  },
  stops: [{
    stationName: String,
    arrivalTime: Date,
    departureTime: Date
  }],
}, { timestamps: true });

export default mongoose.model('Train', trainSchema);
