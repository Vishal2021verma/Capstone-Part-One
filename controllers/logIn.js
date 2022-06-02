const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("email-validator");

exports.logIn = (req, res, next) => {
    //deconstructing body object
    const { password, email } = req.body;

    User.find({ email: email }, (err, user) => { //find email if exits 
        if (err || user.length === 0) res.status(404).json({ error: "This email has not been registered!" });

        else if (user.length > 0) {
            //Comparing password
            bcrypt.compare(password, user[0].password, (_err, result) => {
                if (_err) res.status(401).json({ error: "Invalid Credentials!" });
                else if (result) {
                    const userData = {
                        _id: user[0]._id,
                        email: user[0].email,
                        name: user[0].f_name,
                        role: user[0].role
                    };
                    const token = jwt.sign(userData, "MONGO_SECRET", { expiresIn: "1h" });
                    res.status(200).header("x-auth-token",token).json({
                        "isAuthenticated": true,
                        userData,
                    });
                } else {
                    res.status(401).json({ error: "The password entered is incorrect!" });
                }
            });
        }
    })
    //] .catch((err) => res.status(500).json({ error: err }));
};