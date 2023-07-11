const express = require("express");
const multer = require("multer");

const router = express.Router();
const {
  getCategories,
  createCategory,
  getSpecificCategoryById,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

const {
  getCategoryValidator,
  updateCategoryValidator,
  DeleteCategoryValidator,
  createCategoryValidator,
} = require("../utils/validators/categoryValidator");

const subCategoriesRoute = require("./subCategoryRoute");

router.use("/:categoryId/subCategories", subCategoriesRoute);

// routes
router
  .route("/")
  .get(getCategories)
  .post(createCategoryValidator, createCategory);
router
  .route("/:id")
  .get(getCategoryValidator, getSpecificCategoryById)
  .put(updateCategoryValidator, updateCategory)
  .delete(DeleteCategoryValidator, deleteCategory);

module.exports = router;
