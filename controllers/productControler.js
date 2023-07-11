const asyncHandler = require("express-async-handler");
const ProductModel = require("../models/productModel");
const factory = require("./handlerFactory");
/**
 *  @desc  get list of product
 *  @route Get  /api/products
 *  @access public
 */
exports.getProducts = factory.getAll(ProductModel, "Products");

/**
 *  @desc Get specific product by id
 *  @route Get api=products/:id
 *  @access Public
 */
exports.getSpecificProductById = factory.getSpicific(ProductModel);

/**
 *  @desc  Create product
 *  @route Post  /api/products
 *  @access private
 */
exports.createProduct = factory.createOne(ProductModel);

/**
 * @desc Update Specific product
 * @route PUT api/products/:id
 * @access private
 */
exports.updateProduct = factory.updateOne(ProductModel);

/**
 * @desc Delete Specific product
 * @route DELETE api/products/:id
 * @access private
 */
exports.deleteProduct = factory.deleteOne(ProductModel);
