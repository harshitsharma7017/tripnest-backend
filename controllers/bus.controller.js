import Bus from "../models/travelBookingModels/Bus.js";

const BusController = {};

// Create new bus
BusController.createBus = async (req, res) => {
  try {
    const newBus = new Bus(req.body);
    const savedBus = await newBus.save();
    res.status(201).json(savedBus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all buses
BusController.getAllBuses = async (req, res) => {
  try {
    const buses = await Bus.find();
    res.status(200).json(buses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get bus by ID
BusController.getBusById = async (req, res) => {
  try {
    const bus = await Bus.findById(req.params.id);
    if (!bus) return res.status(404).json({ error: "Bus not found" });
    res.status(200).json(bus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update bus
BusController.updateBus = async (req, res) => {
  try {
    const updatedBus = await Bus.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBus) return res.status(404).json({ error: "Bus not found" });
    res.status(200).json(updatedBus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete bus
BusController.deleteBus = async (req, res) => {
  try {
    const deletedBus = await Bus.findByIdAndDelete(req.params.id);
    if (!deletedBus) return res.status(404).json({ error: "Bus not found" });
    res.status(200).json({ message: "Bus deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

BusController.searchBuses = async (req, res) => {
  try {
    const { from, to, date } = req.query;

    if (!from || !to || !date) {
      return res.status(400).json({ error: "Missing from, to, or date query params" });
    }

    const startTime = new Date(date);
    const endTime = new Date(date);
    endTime.setDate(endTime.getDate() + 1);

    const buses = await Bus.find({
      sourceCity: { $regex: new RegExp(from, "i") },
      destinationCity: { $regex: new RegExp(to, "i") },
      departureTime: { $gte: startTime, $lt: endTime },
    });

    res.status(200).json(buses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export default BusController;
