const mongoose = require("mongoose");
//user Schema
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    created: {type: Date},
    email: {type: String},
    first_name:{type: String},
    last_name: {type: String},
    password:{type: String},
    phone_number: {type: String},
    role: {type:String},
    updated: {type:Date},
    user_name:{type: String}
});
//User model
const User = mongoose.model("User", userSchema,"users");

module.exports = User;