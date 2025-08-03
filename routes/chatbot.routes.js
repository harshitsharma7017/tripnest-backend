import express from "express";
import ChatbotController from "../controllers/chatbot.controller.js";

const chatbotRoutes = express.Router();

chatbotRoutes.post("/message", ChatbotController.handleMessage);

export default chatbotRoutes;
