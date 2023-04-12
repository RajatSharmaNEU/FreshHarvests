const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const userRouter = require('./app/routes/userRoute');
const loginRouter = require('./app/routes/loginRoute');

mongoose.connect("mongodb://127.0.0.1:27017/freshHarvest", {useNewUrlParser: true});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", userRouter);
app.use("/", loginRouter);

app.listen(3000);
console.log("Server Started at port 3000");
module.exports = app;
