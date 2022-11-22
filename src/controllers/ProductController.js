const { col } = require("sequelize");
const ModelProduct = require("../models/produto.js");

module.exports = {
  // List all the products
  async List(req, res) {
    try {
      const products = await ModelProduct.findAll();
      return res.json(products);
    } catch (error) {
      return console.error(`List Error: ${error}`);
    }
  },
  // Create a new product
  async Create(req, res) {
    try {
      const product = await ModelProduct.create({
        Code: req.body.Code,
        Description: req.body.Description,
        OriginDate: req.body.OriginDate,
        ActualizationDate: null,
      });
      return res.json(product);
    } catch (error) {
      return console.error(`Error while creating product: ${error}`);
    }
  },
  // Update an existing product
  async Update(req, res) {
    try {
      const prod = await ModelProduct.findByPk(req.body.Code);

      if (prod) {
        prod.Description = req.body.Description;
        prod.ActualizationDate = new Date();
        await prod.save();
      }
      return res.json(prod);
    } catch (error) {
      return console.error(`Error while updating product: ${error}`);
    }
  },
  // Get an existing product
  async GetProduct(req, res) {
    try {
      const prod = await ModelProduct.findByPk(req.body.Code);
      return res.json(prod);
    } catch (error) {
      return console.error(`Error while getting product: ${error}`);
    }
  },
  // Delete an existing product
  async DeleteProduct(req, res) {
    try {
      const prod = await ModelProduct.findByPk(req.body.Code);
      if (prod) {
        await prod.destroy();
        return res.json(prod);
      }
    } catch (error) {
      return console.error(`Error while deleting product: ${error}`);
    }
  },
};
