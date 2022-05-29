const express = require("express");
const router =  express.Router();

const auth = require("../controllers/signUp");

router.post("", auth.signUp);

module.exports = router;