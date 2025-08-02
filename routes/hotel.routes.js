import express from "express";
import HotelController from "../controllers/hotel.controller.js";

const hotelRoutes = express.Router();

// Create hotel
hotelRoutes.post("/", HotelController.createHotel);

// Get all hotels or by city ID
hotelRoutes.get("/", HotelController.getHotels);

// Get a hotel by ID
hotelRoutes.get("/:id", HotelController.getHotelById);

// Update a hotel
hotelRoutes.put("/:id", HotelController.updateHotel);

// Delete a hotel
hotelRoutes.delete("/:id", HotelController.deleteHotel);

export default hotelRoutes;
