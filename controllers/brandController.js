const slugify = require("slugify");
const asyncHandler = require("express-async-handler");
const BrandModel = require("../models/brandModel");
const ApiError = require("../utils/apiError");
/**
 *  @desc  get list of brands
 *  @route Get  /api/brands
 *  @access public
 */
exports.getBrands = asyncHandler(async (req, res) => {
  // pagination
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 5;
  const skip = (page - 1) * limit;
  //logic
  const brands = await BrandModel.find({}).skip(skip).limit(limit);
  res.status(200).json({ results: brands.length, page, data: brands });
});

/**
 *  @desc Get specific brand by id
 *  @route Get api=brands/:id
 *  @access Public
 */
exports.getSpecificBrandById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const brand = await BrandModel.findById(id);
  if (!brand) {
    return next(new ApiError(`No brand for this id ${id}`, 404));
  }
  res.status(200).json({ data: brand });
});

/**
 *  @desc  Create brand
 *  @route Post  /api/brands
 *  @access private
 */
exports.createBrand = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const brand = await BrandModel.create({ name, slug: slugify(name) });
  res.status(201).json({ data: brand });
});

/**
 * @desc Update Specific brand
 * @route PUT api/brands/:id
 * @access private
 */
exports.updateBrand = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  const brand = await BrandModel.findOneAndUpdate(
    { _id: id },
    { name, slug: slugify(name) },
    { new: true }
  );
  if (!brand) {
    return next(new ApiError(`No brand for this id ${id}`, 404));
  }
  res.status(200).json({ data: brand });
});

/**
 * @desc Delete Specific brand
 * @route DELETE api/brands/:id
 * @access private
 */
exports.deleteBrand = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const brand = await BrandModel.findOneAndDelete(id);
  if (!brand) {
    return next(new ApiError(`No brand for this id ${id}`, 404));
  }
  res.status(200).send("deleted");
});
