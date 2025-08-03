import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import ChatbotController from "../controllers/chatbot.controller.js";

const chatbotRoutes = express.Router();

chatbotRoutes.post("/message", protect, ChatbotController.handleMessage);

export default chatbotRoutes;
