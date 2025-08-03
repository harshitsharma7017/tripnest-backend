import express from "express";
import BookingController from "../controllers/booking.controller.js";
import { protect } from "../middleware/authMiddleware.js";

const bookingRoutes = express.Router();

// Create booking
bookingRoutes.post("/",protect, BookingController.createBooking);

// Get all bookings
bookingRoutes.get("/", protect, BookingController.getAllBookings);

// Get booking by ID
bookingRoutes.get("/:id", protect, BookingController.getBookingById);

// Update booking
bookingRoutes.put("/:id", protect, BookingController.updateBooking);

// Delete booking
bookingRoutes.delete("/:id", protect, BookingController.deleteBooking);

export default bookingRoutes;
