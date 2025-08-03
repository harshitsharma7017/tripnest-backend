import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import BusController from "../controllers/bus.controller.js";

const busRoutes = express.Router();

// Create a new bus
busRoutes.post("/", protect, BusController.createBus);

// Get all buses
busRoutes.get("/", protect, BusController.getAllBuses);

busRoutes.get("/search", protect, BusController.searchBuses);

// Get a bus by ID
busRoutes.get("/:id", protect, BusController.getBusById);

// Update a bus
busRoutes.put("/:id", protect, BusController.updateBus);

// Delete a bus
busRoutes.delete("/:id", protect, BusController.deleteBus);

export default busRoutes;
