const express = require("express");
const router =  express.Router();

const auth = require("../controllers/logIn");

router.post("", auth.logIn);

module.exports = router;