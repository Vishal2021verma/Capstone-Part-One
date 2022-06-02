const Porder = require("../models/order");
const Product = require("../models/product");
const Address = require("../models/address")
const mongoose = require("mongoose");

var currentdate = new Date();  

// Create Order - “/orders”
exports.orderP = (req,res)=>{
    if(req.userData.role  == "USER"){
        Product.findOne({_id: req.body.productId},function(err, foundProduct){
            if(foundProduct){
                Address.findOne({_id:req.body.addressId},function(errA,adrressFound){
                    if(adrressFound){
                        if(foundProduct.avavilable_items == 0){
                            res.status(500).json("Product with ID - "+ foundProduct._id + "is currently out of stock!");
                        }else{
                            const newOrder = new Porder({
                                _id: mongoose.Types.ObjectId(),
                                amount: req.body.quantity,
                                order_date: currentdate,
                                product_product_id: req.body.productId,
                                shiping_address_id: req.body.addressId,
                                user_id: req.userData._id
                            });
                            console.log(newOrder);
                            newOrder.save().then(() => {res.status(200).json(newOrder)}).catch((err)=> {res.status(400).json(err)});
                            
                        }

                    }else{
                        res.status(500).json({message:"No Address found for ID - <id>!"});

                    }
                })

            }else{
                res.status(500).json({message:"No Product found for ID"});
            }
        })
        

    }

}