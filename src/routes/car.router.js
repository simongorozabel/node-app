const {
  getAll,
  createCar,
  removeCar,
  getOneCar,
  updateCar,
} = require("../controllers/car.controllers");
const express = require("express");

const carRouter = express.Router();

carRouter.route("/").get(getAll).post(createCar);

carRouter.route("/:id").get(getOneCar).delete(removeCar).put(updateCar);

module.exports = carRouter;
