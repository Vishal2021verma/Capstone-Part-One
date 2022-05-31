const mongoose =require("mongoose");
//product Schema
const productSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    avavilable_items: {type: Number},
    category: {type:String},
    
    description: {type:String},
    image_url: {type: String},
    manufacturer: {type:String},
    name:{type:String},
    price: {type:Number},
    created: {type: Date},
    updated: {type: Date}
});
//Product mongoose model
const Product  =    mongoose.model("Product", productSchema, "products");

module.exports = Product;
