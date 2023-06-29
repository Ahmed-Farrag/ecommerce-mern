const express = require("express");

const router = express.Router();

const {
  createSubCategory,
  getSubCategory,
  getSpecificSubCategoryById,
  updateSubCategory,
  deleteSubCategory,
} = require("../controllers/subCategouryController");
const {
  createSubCategoryValidator,
  getSubCategoryValidator,
  updateSubCategoryValidator,
  DeleteSubCategoryValidator,
} = require("../utils/validators/subCategoryValidator");

router
  .route("/")
  .post(createSubCategoryValidator, createSubCategory)
  .get(getSubCategory);
router
  .route("/:id")
  .get(getSubCategoryValidator, getSpecificSubCategoryById)
  .put(updateSubCategoryValidator, updateSubCategory)
  .delete(DeleteSubCategoryValidator, deleteSubCategory);

module.exports = router;
