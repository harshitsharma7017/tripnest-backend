import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDb from "./config/db.js";

// Routes
import AuthRoutes from "./routes/auth.routes.js";
import cityRoutes from "./routes/city.routes.js";
import hotelRoutes from "./routes/hotel.routes.js";
import tripRoutes from "./routes/trip.routes.js";
import attractionRoutes from "./routes/attraction.routes.js";
import busRoutes from "./routes/bus.routes.js";
import trainRoutes from "./routes/train.routes.js";
import flightRoutes from "./routes/flight.routes.js";
import cabRoutes from "./routes/cab.routes.js";
import transportRoutes from "./routes/transport.routes.js";
import chatbotRoutes from "./routes/chatbot.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
}));
app.use(express.json());

// Routes
app.use("/api/auth", AuthRoutes);
app.use("/api/cities", cityRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/attractions", attractionRoutes);
app.use("/api/bus", busRoutes);
app.use("/api/flight", flightRoutes);
app.use("/api/train", trainRoutes);
app.use("/api/cab", cabRoutes);
app.use("/api/transport", transportRoutes);
app.use("/api/chatbot", chatbotRoutes);

// Start server
connectToDb().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});
