const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const userRouter = require('./app/routes/userRoute');
const loginRouter = require('./app/routes/loginRoute');
const storeRouter = require('./app/routes/storeRoute');
const verifyRouter = require('./app/routes/vertifyRoute');

mongoose.connect("mongodb://127.0.0.1:27017/freshHarvest", {useNewUrlParser: true});
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/", userRouter);
app.use("/", loginRouter);
app.use("/store", storeRouter);
app.use("/verify", verifyRouter);

app.listen(9001);
console.log("Server Started at port 9001");
module.exports = app;
