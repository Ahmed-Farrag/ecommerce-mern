const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: [true, "SubCategory must be uniqe"],
      minLength: [2, "To Short SubCategory name"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
      required: [true, "SubCategory Must Be Belong To Parent Category"],
    },
  },
  { timeseries: true }
);

module.exports = mongoose.model("subCategory", subCategorySchema);
