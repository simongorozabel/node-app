const catchError = require("../utils/catchError");
const Car = require("../models/Car");

const getAll = catchError(async (req, res) => {
  // Operaciones...
  const cars = await Car.findAll();
  return res.json(cars);
});

const createCar = catchError(async (req, res) => {
  const { brand, model, year, color, price, category } = req.body;
  const ferrari = await Car.create({
    brand,
    model,
    year,
    color,
    price,
    category,
  });
  return res.status(201).json(ferrari);
});

const getOneCar = catchError(async (req, res) => {
  const { id } = req.params;
  const car = await Car.findByPk(id);
  return res.json(car);
});

const removeCar = catchError(async (req, res) => {
  const { id } = req.params;
  await Car.destroy({ where: { id } });
  return res.sendStatus(204);
});

const updateCar = catchError(async (req, res) => {
  const { brand, model, year, color, price, category } = req.body;
  const { id } = req.params;
  const car = await Car.update(
    {
      brand,
      model,
      year,
      color,
      price,
      category,
    },
    { where: { id }, returning: true }
  );

  return res.json(car[1][0]);
});

module.exports = {
  getAll,
  createCar,
  getOneCar,
  removeCar,
  updateCar,
};
