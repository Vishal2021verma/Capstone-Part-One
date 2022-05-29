const User = require("../models/user");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const validator = require("email-validator");

exports.logIn = (req, res, next) => {
    const { password, email } = req.body;

    User.find({ email: email }, (err, user) => {
        if (err || user.length === 0) res.status(404).json({ error: "No user was found with this email." });

        else if (user.length > 0) {
            //Comparing password
            bcrypt.compare(password, user[0].password, (_err, result) => {
                if (_err) res.status(401).json({ error: "Authentication has failed!" });
                else if (result) {
                    const userData = {
                        email: user[0].email,
                        name: user[0].f_name
                    };
                    const token = jwt.sign(userData, "MONGO_SECRET", { expiresIn: "1h" });
                    res.status(200).json({
                        "isAuthenticated": true,
                        token: token,
                        userData,
                    });
                } else {
                    res.status(401).json({ error: "The password entered is incorrect!" });
                }
            });
        }
    })
    // .catch((err) => res.status(500).json({ error: err }));
};