import express from "express";
import TripController from "../controllers/trip.controller.js";

const tripRoutes = express.Router();

// Create trip
tripRoutes.post("/", TripController.createTrip);

// Get all trips or by city
tripRoutes.get("/", TripController.getTrips);

// Get trip by ID
tripRoutes.get("/:id", TripController.getTripById);

// Update trip
tripRoutes.put("/:id", TripController.updateTrip);

// Delete trip
tripRoutes.delete("/:id", TripController.deleteTrip);

export default tripRoutes;
