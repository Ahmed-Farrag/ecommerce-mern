const subCategoryModel = require("../models/subCategoryModel");
const factory = require("./handlerFactory");

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
exports.createSubCategory = factory.createOne(subCategoryModel);

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
exports.getSubCategory = factory.getAll(subCategoryModel);

/**
 *  @desc Get specific subcategory by id
 *  @route Get api=subcategory/:id
 *  @access Public
 */
exports.getSpecificSubCategoryById = factory.getSpicific(subCategoryModel);
/**
 * @desc Update Specific subcategory
 * @route PUT api/subcategories/:id
 * @access private
 */
exports.updateSubCategory = factory.updateOne(subCategoryModel);

/**
 * @desc Delete Specific subcategory
 * @route DELETE api/subcategories/:id
 * @access private
 */
exports.deleteSubCategory = factory.deleteOne(subCategoryModel);
