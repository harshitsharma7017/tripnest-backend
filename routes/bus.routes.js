import express from "express";
import BusController from "../controllers/bus.controller.js";

const busRoutes = express.Router();

// Create a new bus
busRoutes.post("/", BusController.createBus);

// Get all buses
busRoutes.get("/", BusController.getAllBuses);

// Get a bus by ID
busRoutes.get("/:id", BusController.getBusById);

// Update a bus
busRoutes.put("/:id", BusController.updateBus);

// Delete a bus
busRoutes.delete("/:id", BusController.deleteBus);

export default busRoutes;
