import City from "../models/City.js";

const CityController = {}

// Create new city
CityController.createCity = async (req, res) => {
  try {
    const newCity = new City(req.body);
    const savedCity = await newCity.save();
    res.status(201).json(savedCity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all cities
CityController.getAllCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get city by ID
CityController.getCityById = async (req, res) => {
  try {
    const city = await City.findById(req.params.id);
    if (!city) return res.status(404).json({ error: "City not found" });
    res.status(200).json(city);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update city
CityController.updateCity = async (req, res) => {
  try {
    const updatedCity = await City.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedCity) return res.status(404).json({ error: "City not found" });
    res.status(200).json(updatedCity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete city
CityController.deleteCity = async (req, res) => {
  try {
    const deletedCity = await City.findByIdAndDelete(req.params.id);
    if (!deletedCity) return res.status(404).json({ error: "City not found" });
    res.status(200).json({ message: "City deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default CityController;
