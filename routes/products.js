const express = require("express");
const router = express.Router();
const productsController = require("../controllers/product");
const checkauth = require("../middleware/checkauth");

router.get("", productsController.product);
router.get("/categories",productsController.categories);
router.get("/id",productsController.productId);
router.put("/id",checkauth,productsController.productPut);
router.post("",checkauth,productsController.productSave);
router.delete("/id",checkauth,productsController.productDelete);


module.exports = router;
