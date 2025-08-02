import Train from "../models/travelBookingModels/Train.js";

const TrainController = {};

// Create new train
TrainController.createTrain = async (req, res) => {
  try {
    const newTrain = new Train(req.body);
    const savedTrain = await newTrain.save();
    res.status(201).json(savedTrain);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all trains
TrainController.getAllTrains = async (req, res) => {
  try {
    const trains = await Train.find();
    res.status(200).json(trains);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get train by ID
TrainController.getTrainById = async (req, res) => {
  try {
    const train = await Train.findById(req.params.id);
    if (!train) return res.status(404).json({ error: "Train not found" });
    res.status(200).json(train);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update train
TrainController.updateTrain = async (req, res) => {
  try {
    const updatedTrain = await Train.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedTrain) return res.status(404).json({ error: "Train not found" });
    res.status(200).json(updatedTrain);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete train
TrainController.deleteTrain = async (req, res) => {
  try {
    const deletedTrain = await Train.findByIdAndDelete(req.params.id);
    if (!deletedTrain) return res.status(404).json({ error: "Train not found" });
    res.status(200).json({ message: "Train deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default TrainController;
