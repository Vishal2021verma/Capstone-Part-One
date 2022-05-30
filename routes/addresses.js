const express = require("express");
const router =  express.Router();

const add = require("../controllers/address");

router.post("", add.address);//add a address

module.exports = router;