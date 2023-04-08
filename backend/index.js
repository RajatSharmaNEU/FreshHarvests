const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const userRouter = require('./app/routes/userRoute')

mongoose.connect("mongodb://127.0.0.1:27017/freshHarvest", {useNewUrlParser: true});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/user", userRouter);
app.listen(8000);
console.log("Server Started at port 8000");
module.exports = app;
