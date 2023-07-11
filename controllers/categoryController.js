const CategoryModel = require("../models/categoryModel");
const factory = require("./handlerFactory");

/**
 *  @desc  get list of categories
 *  @route Get  /api/categories
 *  @access public
 */
exports.getCategories = factory.getAll(CategoryModel);

/**
 *  @desc Get specific category by id
 *  @route Get api=categories/:id
 *  @access Public
 */
exports.getSpecificCategoryById = factory.getSpicific(CategoryModel);

/**
 *  @desc  Create category
 *  @route Post  /api/categories
 *  @access private
 */
exports.createCategory = factory.createOne(CategoryModel);

/**
 * @desc Update Specific category
 * @route PUT api/categories/:id
 * @access private
 */
exports.updateCategory = factory.updateOne(CategoryModel);

/**
 * @desc Delete Specific category
 * @route DELETE api/categories/:id
 * @access private
 */
exports.deleteCategory = factory.deleteOne(CategoryModel);
