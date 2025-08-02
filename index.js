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

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend Vite URL             // if using cookies/sessions
}));
app.use(express.json());

// Routes
app.use("/api/auth", AuthRoutes);
app.use("/api/cities", cityRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/attractions", attractionRoutes);

// Start server
connectToDb().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});
