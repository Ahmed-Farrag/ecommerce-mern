const slugify = require("slugify");
const { check, body } = require("express-validator");
const validatorMiddleware = require("../../middlewares/validatorMiddleware");

exports.getSubCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid SubCategory ID Format"),
  validatorMiddleware,
];

exports.createSubCategoryValidator = [
  check("name")
    .notEmpty()
    .withMessage("SubCategory Required")
    .isLength({ min: 2 })
    .withMessage("Too Short SubCategory Name")
    .isLength({ max: 32 })
    .withMessage("Too long SubCategory Name"),
  check("category")
    .notEmpty()
    .withMessage("subCategory must be long to category")
    .isMongoId()
    .withMessage("Invalid SubCategory ID Format"),
  body("name").custom((val, { req }) => {
    req.body.slug = slugify(val);
    return true;
  }),
  validatorMiddleware,
];

exports.updateSubCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid SubCategory ID Format"),
  check("name").notEmpty().withMessage("SubCategory Required"),
  body("name").custom((val, { req }) => {
    req.body.slug = slugify(val);
    return true;
  }),
  validatorMiddleware,
];

exports.DeleteSubCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid SubCategory ID Format"),
  validatorMiddleware,
];
