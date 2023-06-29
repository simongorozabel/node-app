const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");
// En Mayúsculas y singular      // en minúsculas y singular
const Product = sequelize.define("product", {
  // Definimos las columnas aquí
  columna1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  columna2: {
    type: DataTypes.STRING(100),
    // allowNull por defecto esta en true
  },
});

module.exports = Product;
