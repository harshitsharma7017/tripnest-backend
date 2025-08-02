import express from "express";
import AttractionController from "../controllers/attraction.controller.js";

const attractionRoutes = express.Router();

attractionRoutes.post("/", AttractionController.createAttraction);
attractionRoutes.get("/", AttractionController.getAllAttractions);
attractionRoutes.get("/:id", AttractionController.getAttractionById);
attractionRoutes.put("/:id", AttractionController.updateAttraction);
attractionRoutes.delete("/:id", AttractionController.deleteAttraction);

export default attractionRoutes;
