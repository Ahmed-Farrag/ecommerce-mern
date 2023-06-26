const slugify = require("slugify");
const CategoryModel = require("../models/categoryModel");
const asyncHandler = require("express-async-handler");

/**
 *  @desc  get list of categories
 *  @route Get  /api/categories
 *  @access public
 */
exports.getCategories = asyncHandler(async (req, res) => {
  // pagination
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 5;
  const skip = (page - 1) * limit;
  //logic
  const categories = await CategoryModel.find({}).skip(skip).limit(limit);
  res.status(200).json({ results: categories.length, page, data: categories });
});

/**
 *  @desc Get specific category by id
 *  @route Get api=categories/:id
 *  @access Public
 */
exports.getSpecificCategoryById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const category = await CategoryModel.findById(id);
  if (!category) {
    res.status(404).json({ msg: `No Category for this id ${id}` });
  }
  res.status(200).json({ data: category });
});

/**
 *  @desc  Create category
 *  @route Post  /api/categories
 *  @access private
 */
exports.createCategory = asyncHandler(async (req, res) => {
  const name = req.body.name;
  const category = await CategoryModel.create({ name, slug: slugify(name) });
  res.status(201).json({ data: category });
});

/**
 * @desc Update Specific category
 * @route PUT api/categories/:id
 * @access private
 */
exports.updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const category = await CategoryModel.findOneAndUpdate(
    { _id: id },
    { name, slug: slugify(name) },
    { new: true }
  );
  if (!category) {
    res.status(404).json({ msg: `No Category for this id ${id}` });
  }
  res.status(200).json({ data: category });
});

/**
 * @desc Delete Specific category
 * @route DELETE api/categories/:id
 * @access private
 */
exports.deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const category = await CategoryModel.findOneAndDelete(id);
  if (!category) {
    res.status(404).json({ msg: `No Category for this id ${id}` });
  }
  res.status(204).send();
});
