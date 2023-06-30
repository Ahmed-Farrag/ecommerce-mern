const slugify = require("slugify");
const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/apiError");
const subCategoryModel = require("../models/subCategoryModel");

exports.setCategoryIdToBody = (req, res, next) => {
  // Nested route
  if (!req.body.category) req.body.category = req.params.categoryId;
  next();
};

/**
 *  @desc  Create subcategory
 *  @route Post  /api/subSubCategory
 *  @access private
 */
exports.createSubCategory = asyncHandler(async (req, res) => {
  const { name, category } = req.body;
  const subcategory = await subCategoryModel.create({
    name,
    slug: slugify(name),
    category,
  });
  res.status(201).json({ data: subcategory });
});

// Nested Route
// GET /api/categories/:category

exports.createFiterObject = (req, res, next) => {
  let filterObject = {};
  if (req.params.categoryId) filterObject = { category: req.params.categoryId };
  req.filterObject = filterObject;
  next();
};

/**
 *  @desc  get list of subCategory
 *  @route Get  /api/subCategory
 *  @access public
 */
exports.getSubCategory = asyncHandler(async (req, res) => {
  // pagination
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 5;
  const skip = (page - 1) * limit;

  //logic
  const subCategory = await subCategoryModel
    .find(req.filterObject)
    .skip(skip)
    .limit(limit);
  // .populate({ path: "category", select: "name -_id" });
  res
    .status(200)
    .json({ results: subCategory.length, page, data: subCategory });
});

/**
 *  @desc Get specific subcategory by id
 *  @route Get api=subcategory/:id
 *  @access Public
 */
exports.getSpecificSubCategoryById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const subCategory = await subCategoryModel.findById(id);

  if (!subCategory) {
    return next(new ApiError(`No subCategory for this id ${id}`, 404));
  }
  res.status(200).json({ data: subCategory });
});

/**
 * @desc Update Specific subcategory
 * @route PUT api/subcategories/:id
 * @access private
 */
exports.updateSubCategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name, category } = req.body;

  const subCategory = await subCategoryModel.findOneAndUpdate(
    { _id: id },
    { name, slug: slugify(name), category },
    { new: true }
  );
  if (!subCategory) {
    return next(new ApiError(`No SubCategory for this id ${id}`, 404));
  }
  res.status(200).json({ data: subCategory });
});

/**
 * @desc Delete Specific subcategory
 * @route DELETE api/subcategories/:id
 * @access private
 */
exports.deleteSubCategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const subCategory = await subCategoryModel.findOneAndDelete(id);
  if (!subCategory) {
    return next(new ApiError(`No SubCategory for this id ${id}`, 404));
  }
  res.status(200).send("deleted");
});
