import express from "express";
import FlightController from "../controllers/flight.controller.js";

const flightRoutes = express.Router();

// Create a new flight
flightRoutes.post("/", FlightController.createFlight);

// Get all flights
flightRoutes.get("/", FlightController.getAllFlights);

// Get a flight by ID
flightRoutes.get("/:id", FlightController.getFlightById);

// Update a flight
flightRoutes.put("/:id", FlightController.updateFlight);

// Delete a flight
flightRoutes.delete("/:id", FlightController.deleteFlight);

router.get("/search", FlightController.searchFlights);

export default flightRoutes;
