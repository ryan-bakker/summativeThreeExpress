const mongoose = require("mongoose");

var Schema = mongoose.Schema;

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
  condition: String,
  thumb: String,
});

// singular capitalized name for the mongo collection - Products
const Product = mongoose.model("Product", ProductsSchema);

module.exports = Product;
