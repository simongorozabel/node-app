const {
  getAll,
  createCar,
  removeCar,
  getOneCar,
} = require("../controllers/car.controllers");
const express = require("express");

const carRouter = express.Router();

carRouter.route("/").get(getAll).post(createCar).delete(removeCar);

carRouter.route("/:id").get(getOneCar);

module.exports = carRouter;
