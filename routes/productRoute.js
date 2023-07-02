const express = require("express");

const router = express.Router();
const {
  getProducts,
  createProduct,
  getSpecificProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productControler");

const {
  getProductValidator,
  updateProductValidator,
  DeleteProductValidator,
  createProductValidator,
} = require("../utils/validators/productValidator");

// routes
router.route("/").get(getProducts).post(createProductValidator, createProduct);
router
  .route("/:id")
  .get(getProductValidator, getSpecificProductById)
  .put(updateProductValidator, updateProduct)
  .delete(DeleteProductValidator, deleteProduct);

module.exports = router;
