const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoute = require("./routes/users");

const app = express();

//mongoDB database connection
mongoose.connect('mongodb://localhost:27017/eshopDB').
  catch(error => console.log(error));

app.use("/users", userRoute); 
app.listen(3000, () => {
    console.log("Server is running at port 3000.....");
});  