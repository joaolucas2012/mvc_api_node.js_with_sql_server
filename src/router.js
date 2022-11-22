const express = require("express");
const productController = require("./controllers/ProductController.js");

const routes = express.Router();

routes.get("/List", productController.List);

routes.post("/Create", productController.Create);

routes.post("/Update", productController.Update);

routes.post("/GetProduct", productController.GetProduct);

routes.post("/Delete", productController.DeleteProduct);

module.exports = routes;
