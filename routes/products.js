const express = require("express");
const router = express.Router();
const productsController = require("../controllers/product");
const checkauth = require("../middleware/checkauth");

router.get("", productsController.product);
router.get("/categories",productsController.categories);
router.post("",checkauth,productsController.productSave);

module.exports = router;
