const mongoose = require("mongoose");

//Order Schema
const orderSchema = mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    amount: {type: Number},
    order_date: {type: Date},
    product_product_id: {type: String},
    shiping_address_id: {type: String},
    user_id: {type: String}
});
//Order Mongoose model 
const Order= mongoose.model("Order", orderSchema,"orders");

module.exports = Order;