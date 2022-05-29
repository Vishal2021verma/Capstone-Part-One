const User = require("../models/user");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const validator = require("email-validator");

var today = new Date();

exports.signUp = (req, res) => {
    console.log(req.body);
    const { f_name, l_name, email, password, phone} = req.body;

    User.findOne({ email })//checking if the email exits  
        .then((user) => {
            if (user) {
                res.status(409).json({ error: "Try any other email, this email is already registered!" });
            } else {
                if (validator.validate(email) == false) {
                    res.status(409).json({ error: "Invalid email-id format!" });
                } else {
                    //hashing the password
                    bcrypt.hash(password, 10, (err, hash) => {

                        if (err) res.status(500).json({ error });
                        else {
                            const newUser = new User({
                                _id: mongoose.Types.ObjectId(),
                                password: hash,
                                first_name: f_name,
                                last_name: l_name,
                                email: email,
                                phone_number: phone,
                                role: "admin",
                                created: today,
                                updated: today,
                                user_name: email
                            });
                            newUser.save().then(() => {res.status(200).send(newUser)}).catch((error) => { res.status(500).json(error)});
                        }
                    })
                }
            }
        })

}