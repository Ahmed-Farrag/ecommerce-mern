const express = require("express");

const router = express.Router({ mergeParams: true });

const {
  createSubCategory,
  getSubCategory,
  getSpecificSubCategoryById,
  updateSubCategory,
  deleteSubCategory,
  setCategoryIdToBody,
  createFiterObject,
} = require("../controllers/subCategouryController");
const {
  createSubCategoryValidator,
  getSubCategoryValidator,
  updateSubCategoryValidator,
  DeleteSubCategoryValidator,
} = require("../utils/validators/subCategoryValidator");

router
  .route("/")
  .post(setCategoryIdToBody, createSubCategoryValidator, createSubCategory)
  .get(createFiterObject, getSubCategory);
router
  .route("/:id")
  .get(getSubCategoryValidator, getSpecificSubCategoryById)
  .put(updateSubCategoryValidator, updateSubCategory)
  .delete(DeleteSubCategoryValidator, deleteSubCategory);

module.exports = router;
