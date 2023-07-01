const express = require("express");

const router = express.Router();
const {
  getBrands,
  createBrand,
  getSpecificBrandById,
  updateBrand,
  deleteBrand,
} = require("../controllers/brandController");

const {
  getBrandValidator,
  updateBrandValidator,
  DeleteBrandValidator,
  createBrandValidator,
} = require("../utils/validators/brandValidator");

// routes
router.route("/").get(getBrands).post(createBrandValidator, createBrand);
router
  .route("/:id")
  .get(getBrandValidator, getSpecificBrandById)
  .put(updateBrandValidator, updateBrand)
  .delete(DeleteBrandValidator, deleteBrand);

module.exports = router;
