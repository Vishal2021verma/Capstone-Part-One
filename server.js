const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auths");
const addressRoute = require("./routes/addresses");
const productRoute = require("./routes/products");
const orderRoute = require("./routes/orders");
const app = express();


//To prevent CORS errors
app.use(cors());


//mongoDB database connection
mongoose.connect('mongodb://localhost:27017/eshopDB').
  catch(error => console.log(error));


// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(bodyParser.json({ limit: "10mb" }));

//App route to handle requests
//external routues
app.use("/users", userRoute);
app.use("/auth", authRoute);
app.use("/addresses", addressRoute);
app.use("/products/", productRoute);
app.use("/orders",orderRoute);
app.get("/", function(req,res){res.status(200).json({massage:"Data fetching from backend Successful"})});


app.listen(5000, () => {
    console.log("Server is running at port 3000.....");
});     

module.exports = app; 