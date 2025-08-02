import Attraction from "../models/Attraction.js";

// Create new attraction
const AttractionController = {}
AttractionController.createAttraction = async (req, res) => {
  try {
    const newAttraction = new Attraction(req.body);
    const savedAttraction = await newAttraction.save();
    res.status(201).json(savedAttraction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all attractions
AttractionController.getAllAttractions = async (req, res) => {
  try {
    const attractions = await Attraction.find();
    res.status(200).json(attractions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get attraction by ID
AttractionController.getAttractionById = async (req, res) => {
  try {
    const attraction = await Attraction.findById(req.params.id);
    if (!attraction) return res.status(404).json({ error: "Attraction not found" });
    res.status(200).json(attraction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update attraction
AttractionController.updateAttraction = async (req, res) => {
  try {
    const updatedAttraction = await Attraction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedAttraction) return res.status(404).json({ error: "Attraction not found" });
    res.status(200).json(updatedAttraction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete attraction
AttractionController.deleteAttraction = async (req, res) => {
  try {
    const deletedAttraction = await Attraction.findByIdAndDelete(req.params.id);
    if (!deletedAttraction) return res.status(404).json({ error: "Attraction not found" });
    res.status(200).json({ message: "Attraction deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default AttractionController;
