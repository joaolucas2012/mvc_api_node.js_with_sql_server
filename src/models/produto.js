const sequelize = require("sequelize");
const database = require("../db");
const schema = "";

class Product extends sequelize.Model {}

Product.init(
  {
    Code: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    Description: {
      type: sequelize.STRING,
      allowNull: true,
    },
    OriginDate: {
      type: sequelize.DATE,
      allowNull: false,
    },
    ActualizationDate: {
      type: sequelize.DATE,
      allowNull: true,
    },
  },
  { sequelize: database, modelName: "tbProduct", schema }
);

module.exports = Product;
