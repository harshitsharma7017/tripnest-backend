// routes/transportRoutes.js
import express from "express";
import TransportController from "../controllers/transport.controller.js";

const transportRoutes = express.Router();

transportRoutes.get("/", TransportController.getTransportOptions);

export default transportRoutes;
