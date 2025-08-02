import Hotel from "../models/Hotel.js";
import City from "../models/City.js";

const HotelController = {}

// Create hotel
HotelController.createHotel = async (req, res) => {
  try {
    const cityExists = await City.findById(req.body.city);
    if (!cityExists) return res.status(404).json({ error: "City not found" });

    const newHotel = new Hotel(req.body);
    const savedHotel = await newHotel.save();
    res.status(201).json(savedHotel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all hotels or filter by cityId
HotelController.getHotels = async (req, res) => {
  try {
    const { city } = req.query;

    let hotels;
    if (city) {
      hotels = await Hotel.find({ city }).populate("city");
    } else {
      hotels = await Hotel.find().populate("city");
    }

    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get hotel by ID
HotelController.getHotelById = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id).populate("city");
    if (!hotel) return res.status(404).json({ error: "Hotel not found" });
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update hotel
HotelController.updateHotel = async (req, res) => {
  try {
    const updated = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Hotel not found" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete hotel
HotelController.deleteHotel = async (req, res) => {
  try {
    const deleted = await Hotel.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Hotel not found" });
    res.status(200).json({ message: "Hotel deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default HotelController;
