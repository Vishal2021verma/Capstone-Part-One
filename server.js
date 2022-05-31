const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auths");
const addressRoute = require("./routes/addresses");
const productRoute = require("./routes/products");

const app = express();


//To prevent CORS errors
app.use(cors());


//mongoDB database connection
mongoose.connect('mongodb://localhost:27017/eshopDB').
  catch(error => console.log(error));


// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(bodyParser.json({ limit: "10mb" }));

app.use("/users", userRoute);
app.use("/auth", authRoute);
app.use("/addresses", addressRoute);
app.use("/products/", productRoute);
app.get("/", function(req,res){res.send("Hi there!")});

app.listen(3000, () => {
    console.log("Server is running at port 3000.....");
});     

module.exports = app;