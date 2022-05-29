const express = require("express");
const router =  express.Router();

const auth = require("../controllers/Auth_Controllers/signUp");

router.post("/users", auth.signUp);
module.exports = router;