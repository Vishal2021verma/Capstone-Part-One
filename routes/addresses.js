const express = require("express");
const checkAuth= require("../middleware/checkauth");
const router =  express.Router();

const add = require("../controllers/address");

router.post("", checkAuth,add.address);//add a address

module.exports = router;