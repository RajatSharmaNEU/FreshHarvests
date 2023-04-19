const axios = require('axios');
const Verify = require("../models/verifyModel");
const Store = require("../models/storeModel");
const validators = require("../utilities/validators");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const storeController = {
    'sendOtp': async (req, res) => {
        const {email} = req.body;
        let otp = Math.floor(1000 + Math.random() * 9000);
        console.log(otp);

        let data = {
            service_id: "service_awa4i8c",
            template_id: "template_ds4gz3j",
            template_params: {
                email,
                otp
            },
            user_id: "an0H3tvHS0noMqv5O"
        };

        try {
            const result = await axios.post(
                'https://api.emailjs.com/api/v1.0/email/send',
                data,
                {
                    headers: {
                        'Origin': 'http://localhost'
                    }
                });

            if (result) {
                console.log('Your mail is sent!');
                const existingList = await Verify.findOne({email});
                if (existingList) {
                    await Verify.findOneAndUpdate({email, otp});
                    res.send({
                        success: true,
                        status: 201,
                        message: "Otp updated",
                    })
                } else {
                    const verify = new Verify({email, otp});
                    verify.save().then(() => {
                        res.sendStatus(200);
                    });
                }
            }
        } catch
            (error) {
            console.log('Oops... ' + JSON.stringify(error));
        }
    },
    'getAll': async (req, res) => {
        const verify = await Verify.find();
        if (verify.length === 0) {
            res.status(204).send(verify);
        } else {
            res.status(200).send(verify);
        }
    },
    'verifyOtp': async (req, res) => {
        const {email, otp} = req.body;
        try {
            validators.validateEmail(email);

            const existingUser = await Verify.findOne({email, otp});
            if (existingUser === null) {
                res.status(401);
                res.json({
                    message: "Unauthorized, please generate otp.",
                    success: false
                });
            } else {
                res.status(200).send({
                    success: true,
                    message: "User otp verified successfully.",
                    user: {email, otp}
                });
            }


        } catch (err) {
            res.status(err.status);
            res.json({message: err.message, success: false});
        }
    }
}
module.exports = storeController;