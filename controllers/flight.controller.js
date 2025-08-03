import Flight from "../models/travelBookingModels/Flight.js";

const FlightController = {};

// Create a new flight
FlightController.createFlight = async (req, res) => {
  try {
    const newFlight = new Flight(req.body);
    const savedFlight = await newFlight.save();
    res.status(201).json(savedFlight);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all flights
FlightController.getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get flight by ID
FlightController.getFlightById = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) return res.status(404).json({ error: "Flight not found" });
    res.status(200).json(flight);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update flight
FlightController.updateFlight = async (req, res) => {
  try {
    const updatedFlight = await Flight.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedFlight) return res.status(404).json({ error: "Flight not found" });
    res.status(200).json(updatedFlight);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete flight
FlightController.deleteFlight = async (req, res) => {
  try {
    const deletedFlight = await Flight.findByIdAndDelete(req.params.id);
    if (!deletedFlight) return res.status(404).json({ error: "Flight not found" });
    res.status(200).json({ message: "Flight deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get flights by source, destination, and optional departure time range
FlightController.searchFlights = async (req, res) => {
  try {
    const { from, to, startTime} = req.query;

    if (!from || !to) {
      return res.status(400).json({ error: "Required query params: from, to, startTime, and endTime (as dates in YYYY-MM-DD format)" });
    }

    const query = {
      sourceAirport: new RegExp(`^${from}`, "i"),
      destinationAirport: new RegExp(`^${to}`, "i"),
    };

    // // Convert startTime and endTime to date range (ignoring time part)
    // const startDate = new Date(startTime); // e.g., 2025-08-02
    // const endDate = new Date(endTime);
    // endDate.setDate(endDate.getDate() + 1); // include entire end date

    // query.departureTime = {
    //   $gte: startDate,
    //   $lt: endDate,
    // };

    const flights = await Flight.find(query);
    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export default FlightController;
