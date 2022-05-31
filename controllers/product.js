const Product = require("../models/product");


exports.product = (req,res) => {
    console.log(req.params);
    res.json(req.params);
}

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
    const cat = [  "Automotive", "Baby Care", "Bags Wallets & Belts"];
    res.status(200).json(cat);
}

