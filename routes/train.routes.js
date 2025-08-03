import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import TrainController from "../controllers/train.controller.js";

const trainRoutes = express.Router();

// Create a new train
trainRoutes.post("/", protect, TrainController.createTrain);

// Get all trains
trainRoutes.get("/", protect, TrainController.getAllTrains);

trainRoutes.get("/search", protect, TrainController.searchTrains);

// Get a train by ID
trainRoutes.get("/:id", protect, TrainController.getTrainById);

// Update a train
trainRoutes.put("/:id", protect, TrainController.updateTrain);

// Delete a train
trainRoutes.delete("/:id", protect, TrainController.deleteTrain);

export default trainRoutes;
