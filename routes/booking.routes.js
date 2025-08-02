import express from "express";
import BookingController from "../controllers/booking.controller.js";

const bookingRoutes = express.Router();

// Create booking
bookingRoutes.post("/", BookingController.createBooking);

// Get all bookings
bookingRoutes.get("/", BookingController.getAllBookings);

// Get booking by ID
bookingRoutes.get("/:id", BookingController.getBookingById);

// Update booking
bookingRoutes.put("/:id", BookingController.updateBooking);

// Delete booking
bookingRoutes.delete("/:id", BookingController.deleteBooking);

export default bookingRoutes;
