const mongoose = require("mongoose");
// create schema
const categorySchema = new mongoose.Schema({ name: String });
//  create model
const CategoryModel = mongoose.model("Category", categorySchema);

module.exports = CategoryModel;
