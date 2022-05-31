const Product = require("../models/product");
const mongoose = require("mongoose");
//current date
var currentDate = new Date();

//1. Search Product - "/products"
exports.product = (req, res) => {
    
    Product.find(function(err, foundP){
        if(foundP){
            res.status(200).json(foundP);
        }else{
            res.status(403).json("Product not found");
        }
    });

}

// 2. Get Product Categories - “/products/categories”
//products/categories route callback
exports.categories = (req, res) => {
    // Product.find(function(err, foundCategory){
    //     if(foundCategory){
    //         //copy array 
    //         res.status(200).json(foundCategory);
    //     }else{
    //         res.status(400).json(err);
    //     }
    // });
    const cat = ["Automotive", "Baby Care", "Bags Wallets & Belts"];
    res.status(200).json(cat);
}

// 3. Get Product by Product ID - “/products/{id}” 
exports.productId = (req,res) => {
    Product.findOne({_id: req.query._id}, function(err,foundProduct){
        if(foundProduct){
            res.status(200).json(foundProduct);
        }else{
            res.status(401).json({message:"No Product found for ID - <id>!"});
        }
    });
}

// 4. Save Product - “/products” 
//products route post-request callback function
//save product
exports.productSave = (req, res) => {
    console.log(req.userData);
    if (req.userData.role == 'admin') {

        
        const productData = new Product({
            _id: mongoose.Types.ObjectId(),
            avavilable_items: req.body.aItem,
            category: req.body.cat,
            
            description:req.body.description,
            image_url: req.body.imageUrl,
            manufacturer: req.body.manuF,
            name: req.body.name,
            price: req.body.price,
            created: currentDate,
            updated: currentDate
        });
           console.log(productData);
        productData.save().then(() => {res.status(200).json(productData)}).catch((err)=> {res.status(400).json(err)});

    } else {
        res.status(401).json("You are not authorized to access this endpoint!");
    }

}
// 5. Update Product Details- “/products/{id}”
exports.productPut = (req,res)=>{
    if(req.userData.role == "admin"){
       Product.findOneAndUpdate(req.query._id, req.body,  {new:true}, (err,updated)=>{
           if(updated){
               res.status(200).json(updated);
           }else{
               res.status(500).json(err);
           }
       });
    }else{
        res.status(401).json("You are not authorized to access this endpoint!");
    }
}
// 6. Delete Product “/products/{id}” 
exports.productDelete =(req, res) =>{
    if(req.userData.role  == "admin"){
        Product.findOneAndDelete(req.query._id,(err,deletedProduct)=>{
            if(err){
                res.status(500).json(err);
            }else{
                res.status(200).json(deletedProduct);
            }
        });
    }else{
        res.status(401).json("You are not authorized to access this endpoint!");
    }
}

