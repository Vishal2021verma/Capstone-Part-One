const Address = require("../models/address");
const User = require("../models/user");
const mongoose = require("mongoose");
exports.address = (req, res) => {
    const {city,landmark,name,phone,state,street,zip_code} = req.body;
    //add validators 
    User.findOne({_id: req.userData},function(err,foundUser){
        if(foundUser){
            const newAddress = new Address({
                _id: mongoose.Types.ObjectId(),
                city:city,
                landmark: landmark,
                name: name,
                phone: phone,
                state: state,
                street: street,
                zipcode: zip_code,
                user_id: req.userData._id
            });
            newAddress.save().then(() => {res.status(200).send(newAddress)}).catch((error) => {res.status(500).json(error)});
        }else{
            res.status(401).json({ message: "Authentication has failed!" });
        }
    });
   
}