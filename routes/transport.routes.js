// routes/transportRoutes.js
import express from "express";
import TransportController from "../controllers/transport.controller";

const transportRoutes = express.Router();

transportRoutes.get("/", TransportController);

export default transportRoutes;
