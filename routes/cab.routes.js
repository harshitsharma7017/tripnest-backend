import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import CabController from "../controllers/cab.controller.js";

const cabRoutes = express.Router();

// Create a new cab booking
cabRoutes.post("/", protect, CabController.createCabBooking);

// Get all cab bookings
cabRoutes.get("/", protect, CabController.getAllCabBookings);

// Get a cab booking by ID
cabRoutes.get("/:id", protect, CabController.getCabBookingById);

// Update a cab booking
cabRoutes.put("/:id", protect, CabController.updateCabBooking);

// Delete a cab booking
cabRoutes.delete("/:id", protect, CabController.deleteCabBooking);

export default cabRoutes;
