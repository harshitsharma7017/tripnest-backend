import express from "express";
import CityController from "../controllers/city.controller.js";

const cityRoutes = express.Router();

// Create a new city
cityRoutes.post("/", CityController.createCity);

// Get all cities
cityRoutes.get("/", CityController.getAllCities);

// Get a city by ID
cityRoutes.get("/:id", CityController.getCityById);

// Update a city
cityRoutes.put("/:id", CityController.updateCity);

// Delete a city
cityRoutes.delete("/:id", CityController.deleteCity);

export default cityRoutes;
