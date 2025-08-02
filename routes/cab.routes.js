import express from "express";
import CabController from "../controllers/cab.controller.js";

const cabRoutes = express.Router();

// Create a new cab booking
cabRoutes.post("/", CabController.createCabBooking);

// Get all cab bookings
cabRoutes.get("/", CabController.getAllCabBookings);

// Get a cab booking by ID
cabRoutes.get("/:id", CabController.getCabBookingById);

// Update a cab booking
cabRoutes.put("/:id", CabController.updateCabBooking);

// Delete a cab booking
cabRoutes.delete("/:id", CabController.deleteCabBooking);

export default cabRoutes;
