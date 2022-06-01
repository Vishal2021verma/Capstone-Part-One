const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/checkauth");
const orderController = require("../controllers/order");

router.post("",checkAuth,orderController.orderP);

module.exports = router;