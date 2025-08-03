import express from "express";
import TrainController from "../controllers/train.controller.js";

const trainRoutes = express.Router();

// Create a new train
trainRoutes.post("/", TrainController.createTrain);

// Get all trains
trainRoutes.get("/", TrainController.getAllTrains);

trainRoutes.get("/search", TrainController.searchTrains);

// Get a train by ID
trainRoutes.get("/:id", TrainController.getTrainById);

// Update a train
trainRoutes.put("/:id", TrainController.updateTrain);

// Delete a train
trainRoutes.delete("/:id", TrainController.deleteTrain);

export default trainRoutes;
