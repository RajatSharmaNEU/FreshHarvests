const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const validators = require("../utilities/validators");

const loginController = {
    'loginUser': async (req, res) => {
        const {email, password} = req.body;
        try {
            validators.validateEmail(email);
            validators.validatePassword(password);

            const existingUser = await User.findOne({email});

            if (existingUser === null) {
                let err = new Error('User not found. Please sign up.');
                err.status = 404;
                throw err;
            }

            bcrypt.compare(password, existingUser.password, async (error, result) => {
                if (error) {
                    let err = new Error('Internal server error.');
                    err.status = 500;
                    throw err;
                }
                if (result) {
                    const {firstName, lastName, email} = existingUser;
                    res.status(200).send({
                        success: true,
                        message: "User authenticated successfully.",
                        user: {firstName, lastName, email}
                    });
                } else {
                    let err = new Error('Unauthorized, please provide valid password.');
                    err.status = 401;
                    throw err;
                }
            })
        } catch (err) {
            res.status(err.status);
            res.json({message: err.message, success: false});
        }
    }
}
module.exports = loginController;