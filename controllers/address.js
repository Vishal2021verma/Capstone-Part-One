const Address = require("../models/address");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

exports.address = (req, res) => {
    const {city,landmark,name,phone,state,street,zip_code,userId } = req.body;
    const newAddress = new Address({
        _id: mongoose.Types.ObjectId(),
        city:city,
        landmark: landmark,
        name: name,
        phone: phone,
        state: state,
        street: street,
        zipcode: zip_code,
        user_id: userId
    });
    newAddress.save().then(() => {res.status(200).send(newAddress)}).catch((error) => {res.status(500).json(error)});

}