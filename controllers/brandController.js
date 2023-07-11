const BrandModel = require("../models/brandModel");
const factory = require("./handlerFactory");
/**
 *  @desc  get list of brands
 *  @route Get  /api/brands
 *  @access public
 */
exports.getBrands = factory.getAll(BrandModel);

/**
 *  @desc Get specific brand by id
 *  @route Get api=brands/:id
 *  @access Public
 */
exports.getSpecificBrandById = factory.getSpicific(BrandModel);

/**
 *  @desc  Create brand
 *  @route Post  /api/brands
 *  @access private
 */
exports.createBrand = factory.createOne(BrandModel);
/**
 * @desc Update Specific brand
 * @route PUT api/brands/:id
 * @access private
 */
exports.updateBrand = factory.updateOne(BrandModel);

/**
 * @desc Delete Specific brand
 * @route DELETE api/brands/:id
 * @access private
 */
exports.deleteBrand = factory.deleteOne(BrandModel);
