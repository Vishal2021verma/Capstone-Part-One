const mongoose =require("mongoose");
//address Schema
const addressSchema = mongoose.Schema({
    id: {type: Number},
    city: {type: String},
    landmark: {type: String},
    name: {type: String},
    phone: {type: String},
    state: {type: String},
    street: {type: String},
    zipcode: {type: String},
    user_id: {type: String}
});
//Address mongoose model
const Address  = mongoose.model("Address", addressSchema, "addresses");

module.exports = Address;
