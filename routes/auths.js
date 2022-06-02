const express = require("express");
const router =  express.Router();
const auth = require("../controllers/logIn");
//handlling the incoming request
router.post("", auth.logIn);

module.exports = router;