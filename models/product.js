const mongoose =require("mongoose");
//product Schema
const productSchema = mongoose.Schema({
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
//Product mongoose model
const Product  =    mongoose.model("Product", productSchema, "products");

module.exports = Product;
