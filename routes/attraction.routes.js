import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import AttractionController from "../controllers/attraction.controller.js";

const attractionRoutes = express.Router();

attractionRoutes.post("/", protect, AttractionController.createAttraction);
attractionRoutes.get("/", protect, AttractionController.getAllAttractions);
attractionRoutes.get("/city", protect, AttractionController.getAttractionsByCity);
attractionRoutes.get("/:id", protect, AttractionController.getAttractionById);
attractionRoutes.put("/:id", protect, AttractionController.updateAttraction);
attractionRoutes.delete("/:id", protect, AttractionController.deleteAttraction);

export default attractionRoutes;
