import City from "../models/City.js";
import Flight from "../models/travelBookingModels/Flight.js";
import Hotel from "../models/Hotel.js";
import Attraction from "../models/Attraction.js";

const ChatbotController = {};

ChatbotController.handleMessage = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ reply: "Please enter a message." });

    const lowerMessage = message.toLowerCase();

    // 1. Dynamically fetch all cities
    const allCities = await City.find().select("name -_id");
    const cityObj = allCities.find(c => c.name && lowerMessage.includes(c.name.toLowerCase()));
    const city = cityObj ? cityObj.name : null;

    if (!city) {
      return res.status(200).json({
        reply: "Please mention a valid city. I'm trained to help you with travel options like flights, hotels, etc.",
      });
    }

    let finalPrompt = "";
    let result = [];

    // 2. Check for travel mode keywords
    if (lowerMessage.includes("flight")) {
      const allFlights = await Flight.find();
      result = allFlights.filter(f =>
        f.sourceAirport.toLowerCase().includes(city.toLowerCase()) ||
        f.destinationAirport.toLowerCase().includes(city.toLowerCase())
      );
      finalPrompt = `Here are some flights related to ${city}:`;

    } else if (lowerMessage.includes("hotel")) {
      const allHotels = await Hotel.find().populate("city");
      result = allHotels.filter(h =>
        h.city?.name?.toLowerCase() === city.toLowerCase()
      );
      finalPrompt = `Here are some hotels in ${city}:`;

    } else if (lowerMessage.includes("attraction")) {
      result = await Attraction.find({
        city: { $regex: new RegExp(city, "i") },
      });
      finalPrompt = `Here are some attractions in ${city}:`;

    } else if (["bus", "cab", "train"].some(mode => lowerMessage.includes(mode))) {
      finalPrompt = `There are several buses, cabs, and trains available to/from ${city}. Please check the respective sections for availability.`;

    } else {
      finalPrompt =
        "I'm only trained to answer travel-related queries about hotels, flights, attractions, buses, cabs, and trains.";
    }

    return res.status(200).json({
      reply: finalPrompt,
      data: result,
    });
  } catch (error) {
    console.error("Chatbot Error:", error);
    res.status(500).json({ reply: "Something went wrong on our end." });
  }
};

export default ChatbotController;
