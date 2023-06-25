const express = require("express");
const router = express.Router();
const { getCategories } = require("../controllers/categoryController");
// routes
router.post("/", getCategories);

module.exports = router;
