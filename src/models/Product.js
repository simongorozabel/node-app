const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");
// En Mayúsculas y singular      // en minúsculas y singular
const Product = sequelize.define("product", {
  // Definimos las columnas aquí
  brand: {
    type: DataTypes.STRING,
  },
  model: {
    type: DataTypes.STRING(100),
    // allowNull por defecto esta en true
  },
  year: {
    type: DataTypes.INTEGER,
  },
  color: {
    type: DataTypes.STRING,
  },
});

module.exports = Product;
