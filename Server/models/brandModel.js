const mongoose = require("mongoose");

// create schema
const brandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Brand Required"],
      unique: [true, "Brand Must Be Uniqe"],
      minLength: [3, "Too Short Brand Name"],
      maxLength: [32, "Too Long Brand Name"],
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
module.exports = mongoose.model("Brand", brandSchema);
