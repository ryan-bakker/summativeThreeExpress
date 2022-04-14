const mongoose = require("mongoose");

var Schema = mongoose.Schema;

// product properties

var ProductsSchema = new Schema({
  user: String,
  year: String,
  brand: String,
  model: String,
  price: String,
  odometer: String,
  engine: String,
  fuel: String,
  transmission: String,
  features: String,
  description: String,
  thumb: String,
});

const Product = mongoose.model("Product", ProductsSchema);

module.exports = Product;
