const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const CategoryModel = require("../models/categoryModel");
const factory = require("./handlerFactory");

//DiskStorge
const multerStorge = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/categories");
  },
  filename: function (req, file, cb) {
    // category-${id}-Date.now().jpeg
    const ext = file.mimetype.split("/")[1];
    const filename = `category-${uuidv4()}-${Date.now()}.${ext}`;
    cb(null, filename);
  },
});
// const multerFilter = function
const upload = multer({ storge: multerStorge, fileFilter: multerFilter });
exports.uploadCategoriesImage = upload.single("image");

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
