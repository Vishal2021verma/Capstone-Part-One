const mongoose =require("mongoose");
//product Schema
const productSchema = mongoose.Schema({
    product_id:{type: Number},
    avavilable_items: {type: Number},
    category: {type:String},
    created: {tpye: Date},
    description: {type:String},
    image_url: {type: String},
    manufacturer: {type:String},
    name:{type:String},
    price: {type:Number},
    updated: {type: Date}
});
//Product mongoose model
const Product  =    mongoose.model("Product", productSchema, "products");

module.exports = Product;
