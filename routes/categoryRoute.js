const express = require("express");
const router = express.Router();
const {
  getCategories,
  createCategory,
  getSpecificCategoryById,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
// routes
router.route("/").get(getCategories).post(createCategory);
router
  .route("/:id")
  .get(getSpecificCategoryById)
  .put(updateCategory)
  .delete(deleteCategory);

module.exports = router;
