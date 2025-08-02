import TripPackage from "../models/TripPackage.js";
import City from "../models/City.js";

const TripController = {}

// Create trip
TripController.createTrip = async (req, res) => {
  try {
    const cityExists = await City.findById(req.body.city);
    if (!cityExists) return res.status(404).json({ error: "City not found" });

    const newTrip = new TripPackage(req.body);
    const savedTrip = await newTrip.save();
    res.status(201).json(savedTrip);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all trips or filter by city
TripController.getTrips = async (req, res) => {
  try {
    const { city } = req.query;
    let trips;

    if (city) {
      trips = await TripPackage.find({ city }).populate("city");
    } else {
      trips = await TripPackage.find().populate("city");
    }

    res.status(200).json(trips);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get trip by ID
TripController.getTripById = async (req, res) => {
  try {
    const trip = await TripPackage.findById(req.params.id).populate("city");
    if (!trip) return res.status(404).json({ error: "Trip not found" });
    res.status(200).json(trip);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update trip
TripController.updateTrip = async (req, res) => {
  try {
    const updated = await TripPackage.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ error: "Trip not found" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete trip
TripController.deleteTrip = async (req, res) => {
  try {
    const deleted = await TripPackage.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Trip not found" });
    res.status(200).json({ message: "Trip deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default TripController;
