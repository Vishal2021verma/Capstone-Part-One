const mongoose = require("mongoose");

//Order Schema
const orderSchema = mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    amount: {type: double},
    order_date: {type: Date},
    product_product_id: {type: Number},
    shiping_address_id: {type: Number},
    user_id: {type: Number}
});
//Order Mongoose model 
const Order= monggose.model("Order", orderSchema,"orders");

module.export = Order;