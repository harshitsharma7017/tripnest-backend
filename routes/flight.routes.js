import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import FlightController from "../controllers/flight.controller.js";

const flightRoutes = express.Router();

// Create a new flight
flightRoutes.post("/", protect, FlightController.createFlight);

// Get all flights
flightRoutes.get("/", protect, FlightController.getAllFlights);
flightRoutes.get("/search", protect, FlightController.searchFlights);

// Get a flight by ID
flightRoutes.get("/:id", protect, FlightController.getFlightById);

// Update a flight
flightRoutes.put("/:id", protect, FlightController.updateFlight);

// Delete a flight
flightRoutes.delete("/:id", protect, FlightController.deleteFlight);


export default flightRoutes;
