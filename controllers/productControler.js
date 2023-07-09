const slugify = require("slugify");
const asyncHandler = require("express-async-handler");
const ProductModel = require("../models/productModel");
const ApiError = require("../utils/apiError");
const ApiFeatures = require("../utils/apiFeatuers");
/**
 *  @desc  get list of product
 *  @route Get  /api/products
 *  @access public
 */
exports.getProducts = asyncHandler(async (req, res) => {
  // build query
  const documentCounts = await ProductModel.countDocuments();
  const apiFeatures = new ApiFeatures(ProductModel.find(), req.query)
    .paginate(documentCounts)
    .filter()
    .limitFields()
    .search()
    .sort();

  // execute query
  const { mongooseQuery, paginationResult } = apiFeatures;
  const products = await mongooseQuery;
  res
    .status(200)
    .json({ results: products.length, paginationResult, data: products });
});

/**
 *  @desc Get specific product by id
 *  @route Get api=products/:id
 *  @access Public
 */
exports.getSpecificProductById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const product = await ProductModel.findById(id).populate({
    path: "category",
    select: "name",
  });
  if (!product) {
    return next(new ApiError(`No product for this id ${id}`, 404));
  }
  res.status(200).json({ data: product });
});

/**
 *  @desc  Create product
 *  @route Post  /api/products
 *  @access private
 */
exports.createProduct = asyncHandler(async (req, res) => {
  req.body.slug = slugify(req.body.title);
  const product = await ProductModel.create(req.body);
  res.status(201).json({ data: product });
});

/**
 * @desc Update Specific product
 * @route PUT api/products/:id
 * @access private
 */
exports.updateProduct = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (req.body.title) {
    req.body.slug = slugify(req.body.title);
  }

  const product = await ProductModel.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  if (!product) {
    return next(new ApiError(`No product for this id ${id}`, 404));
  }
  res.status(200).json({ data: product });
});

/**
 * @desc Delete Specific product
 * @route DELETE api/products/:id
 * @access private
 */
exports.deleteProduct = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const product = await ProductModel.findOneAndDelete(id);
  if (!product) {
    return next(new ApiError(`No product for this id ${id}`, 404));
  }
  res.status(200).send("deleted");
});
