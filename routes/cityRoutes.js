import express from "express";
import {
  createCity,
  getAllCities,
  getCityById,
  updateCityById,
  deleteCityById,
} from "../controllers/city.controller.js";

const router = express.Router();

router.post("/", createCity).get("/", getAllCities),
  router
    .get("/:id", getCityById)
    .put("/:id", updateCityById)
    .delete("/:id", deleteCityById);

export default router;
