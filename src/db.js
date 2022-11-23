const Sequelize = require("sequelize");

const database = new Sequelize(
  "dbprodutosmvc",
  "DATABASE_USERNAME",
  "DATABASE_PASSWORD",
  {
    host: "DATABASE_HOST",
    port: "DATABASE_PORT",
    dialect: "mssql",
  }
);

database.sync().then(
  function () {
    console.log("DB connection sucessful.");
  },
  function (err) {
    // catch error here
    console.log(err);
  }
);

module.exports = database;
