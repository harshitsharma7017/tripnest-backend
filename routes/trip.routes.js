import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import TripController from "../controllers/trip.controller.js";

const tripRoutes = express.Router();

// Create trip
tripRoutes.post("/", protect, TripController.createTrip);

// Get all trips or by city
tripRoutes.get("/", protect, TripController.getTrips);

// Get trip by ID
tripRoutes.get("/:id", protect, TripController.getTripById);

// Update trip
tripRoutes.put("/:id", protect, TripController.updateTrip);

// Delete trip
tripRoutes.delete("/:id", protect, TripController.deleteTrip);

export default tripRoutes;
