import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import CityController from "../controllers/city.controller.js";

const cityRoutes = express.Router();

// Create a new city
cityRoutes.post("/", protect, CityController.createCity);

// Get all cities
cityRoutes.get("/", protect, CityController.getAllCities);

// Get a city by ID
cityRoutes.get("/:id", protect, CityController.getCityById);

// Update a city
cityRoutes.put("/:id", protect, CityController.updateCity);

// Delete a city
cityRoutes.delete("/:id", protect, CityController.deleteCity);

export default cityRoutes;
