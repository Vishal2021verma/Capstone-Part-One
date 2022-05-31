const express = require("express");
const router = express.Router();
const productsController = require("../controllers/product");

router.get("", productsController.product);
router.get("/categories",productsController.categories);

module.exports = router;
