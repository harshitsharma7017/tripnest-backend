import CabBooking from "../models/travelBookingModels/CabBooking.js";
const CabController = {};

// Create new cab booking
CabController.createCabBooking = async (req, res) => {
  try {
    const newCab = new CabBooking(req.body);
    const savedCab = await newCab.save();
    res.status(201).json(savedCab);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all cab bookings
CabController.getAllCabBookings = async (req, res) => {
  try {
    const cabs = await CabBooking.find().populate("userId", "name email");
    res.status(200).json(cabs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get cab booking by ID
CabController.getCabBookingById = async (req, res) => {
  try {
    const cab = await CabBooking.findById(req.params.id).populate("userId", "name email");
    if (!cab) return res.status(404).json({ error: "Cab booking not found" });
    res.status(200).json(cab);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update cab booking
CabController.updateCabBooking = async (req, res) => {
  try {
    const updatedCab = await CabBooking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedCab) return res.status(404).json({ error: "Cab booking not found" });
    res.status(200).json(updatedCab);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete cab booking
CabController.deleteCabBooking = async (req, res) => {
  try {
    const deletedCab = await CabBooking.findByIdAndDelete(req.params.id);
    if (!deletedCab) return res.status(404).json({ error: "Cab booking not found" });
    res.status(200).json({ message: "Cab booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default CabController;
