const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config()

const userRouter = require('./app/routes/userRoute');
const loginRouter = require('./app/routes/loginRoute');
const storeRouter = require('./app/routes/storeRoute');
const verifyRouter = require('./app/routes/vertifyRoute');
const adminRouter = require('./app/routes/adminRoute');


mongoose.connect(process.env.DATABASE_LOCAL_URL, {useNewUrlParser: true})
    .then(() => {
        app.use(cors());
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());

        app.use("/", userRouter);
        app.use("/", loginRouter);
        app.use("/store", storeRouter);
        app.use("/verify", verifyRouter);
        app.use("/admin", adminRouter);

        app.listen(9001);
        console.log("Server Started at port 9001");
    })
    .catch(e => {
        console.log(e);
    });

module.exports = app;
