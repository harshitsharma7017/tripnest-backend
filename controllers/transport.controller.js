// controllers/transportController.js
import Bus from "../models/travelBookingModels/Bus.js";
import Train from "../models/travelBookingModels/Train.js";
import CabBooking from "../models/travelBookingModels/CabBooking.js";

const TransportController = {};

TransportController.getTransportOptions = async (req, res) => {
  try {
    const { from, to, date } = req.query;

    if (!from || !to) {
      return res.status(400).json({ error: "'from' and 'to' are required query parameters." });
    }

    const startOfDay = date ? new Date(date) : null;
    const endOfDay = date ? new Date(date) : null;
    if (startOfDay && endOfDay) {
      endOfDay.setHours(23, 59, 59, 999);
    }

    // Bus search
    const busQuery = { sourceCity: from, destinationCity: to };
    if (startOfDay && endOfDay) {
      busQuery.departureTime = { $gte: startOfDay, $lte: endOfDay };
    }
    const buses = await Bus.find(busQuery);

    // Train search
    const trainQuery = { sourceStation: from, destinationStation: to };
    if (startOfDay && endOfDay) {
      trainQuery.departureTime = { $gte: startOfDay, $lte: endOfDay };
    }
    const trains = await Train.find(trainQuery);

    // Cab search
    const cabQuery = { pickupLocation: from, dropLocation: to };
    if (startOfDay && endOfDay) {
      cabQuery.pickupTime = { $gte: startOfDay, $lte: endOfDay };
    }
    const cabs = await CabBooking.find(cabQuery);

    res.json({ buses, trains, cabs });
  } catch (err) {
    console.error("Error fetching transport data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default TransportController;