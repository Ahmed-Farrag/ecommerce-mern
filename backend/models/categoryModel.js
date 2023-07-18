const mongoose = require("mongoose");

// create schema
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category Required"],
      unique: [true, "Category Must Be Uniqe"],
      minLength: [3, "Too Short Category Name"],
      maxLength: [32, "Too Long category Name"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    image: String,
  },
  { timestamps: true }
);
//  create model
const CategoryModel = mongoose.model("Category", categorySchema);

module.exports = CategoryModel;
