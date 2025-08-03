import City from "../models/City.js";
import Flight from "../models/travelBookingModels/Flight.js";
import Hotel from "../models/Hotel.js";
import Attraction from "../models/Attraction.js";
import Bus from "../models/travelBookingModels/Bus.js";
import Train from "../models/travelBookingModels/Train.js";
import TripPackage from "../models/TripPackage.js";


const ChatbotController = {};

ChatbotController.handleMessage = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ reply: "Please enter a message." });
    }

    const lowerMessage = message.toLowerCase();

    // Keywords
    const attractionKeywords = ["attraction", "visit", "see", "places", "explore"];
    const hotelKeywords = ["hotel", "stay", "accommodation"];
    const flightKeywords = ["flight", "airplane", "plane"];
    const busKeywords = ["bus"];
    const trainKeywords = ["train"];
    const tripKeywords = ["trip", "package", "vacation", "tour"];

    // 1. Find city
    const allCities = await City.find().select("name -_id");
    const cityObj = allCities.find((c) =>
      c.name && lowerMessage.includes(c.name.toLowerCase())
    );
    const city = cityObj ? cityObj.name : null;

    if (!city) {
      return res.status(200).json({
        reply:
          "Please mention a valid city. I'm trained to help you with travel options like flights, hotels, trips, etc.",
      });
    }

    let finalPrompt = "";
    let result = [];

    // 2. Intent check
    if (flightKeywords.some((k) => lowerMessage.includes(k))) {
      const allFlights = await Flight.find();
      result = allFlights
        .filter(
          (f) =>
            f.sourceAirport.toLowerCase().includes(city.toLowerCase()) ||
            f.destinationAirport.toLowerCase().includes(city.toLowerCase())
        )
        .map((f) => ({ ...f.toObject(), type: "flight" }));

      finalPrompt = `Here are some flights related to ${city}:`;

    } else if (hotelKeywords.some((k) => lowerMessage.includes(k))) {
      const allHotels = await Hotel.find().populate("city");
      result = allHotels
        .filter((h) => h.city?.name?.toLowerCase() === city.toLowerCase())
        .map((h) => ({ ...h.toObject(), type: "hotel" }));

      finalPrompt = `Here are some hotels in ${city}:`;

    } else if (attractionKeywords.some((k) => lowerMessage.includes(k))) {
      const attractions = await Attraction.find({
        city: { $regex: new RegExp(city, "i") },
      });
      result = attractions.map((a) => ({ ...a.toObject(), type: "attraction" }));

      finalPrompt = `Here are some attractions in ${city}:`;

    } else if (busKeywords.some((k) => lowerMessage.includes(k))) {
      const allBuses = await Bus.find();
      result = allBuses
        .filter(
          (b) =>
            b.sourceCity.toLowerCase().includes(city.toLowerCase()) ||
            b.destinationCity.toLowerCase().includes(city.toLowerCase())
        )
        .map((b) => ({ ...b.toObject(), type: "bus" }));

      finalPrompt = `Here are some buses related to ${city}:`;

    } else if (trainKeywords.some((k) => lowerMessage.includes(k))) {
      const allTrains = await Train.find();
      result = allTrains
        .filter(
          (t) =>
            t.sourceStation.toLowerCase().includes(city.toLowerCase()) ||
            t.destinationStation.toLowerCase().includes(city.toLowerCase())
        )
        .map((t) => ({ ...t.toObject(), type: "train" }));

      finalPrompt = `Here are some trains related to ${city}:`;

    } else if (tripKeywords.some((k) => lowerMessage.includes(k))) {
      const trips = await TripPackage.find({
        city: { $regex: new RegExp(city, "i") },
      });
      result = trips.map((tp) => ({ ...tp.toObject(), type: "trip" }));

      finalPrompt = `Here are some trip packages for ${city}:`;

    } else {
      finalPrompt =
        "I'm trained to answer travel-related queries about hotels, flights, attractions, buses, trains, and trips. Please include one of these in your message.";
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