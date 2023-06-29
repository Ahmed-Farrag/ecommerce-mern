const express = require("express");

const router = express.Router();

const {
  createSubCategory,
  getSubCategory,
  getSpecificSubCategoryById,
} = require("../controllers/subCategouryController");
const {
  createSubCategoryValidator,
  getSubCategoryValidator,
} = require("../utils/validators/subCategoryValidator");

router
  .route("/")
  .post(createSubCategoryValidator, createSubCategory)
  .get(getSubCategory);
router.route("/:id").get(getSubCategoryValidator, getSpecificSubCategoryById);

module.exports = router;
