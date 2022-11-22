require("dotenv").config();
const sequelize = require("sequelize");

const database = new sequelize(
  "dbprodutosmvc",
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: "mssql",
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT,
  }
);

database.sync();

module.exports = database;
