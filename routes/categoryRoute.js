const express = require("express");

const router = express.Router();
const {
  getCategories,
  createCategory,
  getSpecificCategoryById,
  updateCategory,
  deleteCategory,
  uploadCategoriesImage,
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
  .post(uploadCategoriesImage, createCategoryValidator, createCategory);
router
  .route("/:id")
  .get(getCategoryValidator, getSpecificCategoryById)
  .put(updateCategoryValidator, updateCategory)
  .delete(DeleteCategoryValidator, deleteCategory);

module.exports = router;
