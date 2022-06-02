const express = require("express");
const router =  express.Router();
const auth = require("../controllers/signUp");
//handlling the incoming request
router.post("", auth.signUp);

module.exports = router;