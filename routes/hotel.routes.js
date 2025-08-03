import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import HotelController from "../controllers/hotel.controller.js";

const hotelRoutes = express.Router();

// Create hotel
hotelRoutes.post("/", protect, HotelController.createHotel);

// Get all hotels or by city ID
hotelRoutes.get("/", protect, HotelController.getHotels);

// Get a hotel by ID
hotelRoutes.get("/:id", protect, HotelController.getHotelById);

// Update a hotel
hotelRoutes.put("/:id", protect, HotelController.updateHotel);

// Delete a hotel
hotelRoutes.delete("/:id", protect, HotelController.deleteHotel);

export default hotelRoutes;
