const User = require("../models/userModel");
const validators = require("../utilities/validators");
const bcrypt = require("bcrypt");

const userController = {
    'createUser': async (req, res) => {
        const { firstName, lastName, email, password, address, phoneNumber } = req.body;
        try {
            validators.validateFirstName(firstName);
            validators.validateLastName(lastName);
            validators.validateEmail(email);
            validators.validatePassword(password);
            validators.validateAddress(address);
            validators.validatePhoneNumber(phoneNumber);

            const existingUser = await User.findOne({email});
            if (existingUser) {
                let err = new Error('User already exist with same email id.');
                err.status = 409;
                throw err;
            }
            bcrypt.hash(password, 12, function (err, hash) {
                if (err) {
                    let err = new Error('Internal server error.');
                    err.status = 500;
                    throw err;
                }

                const newUser = new User({
                    firstName,
                    lastName,
                    email,
                    password: hash,
                    address,
                    phoneNumber
                })
                newUser.save().then(() => {
                    res.send({
                        success: true,
                        status: 201,
                        message: "User created successfully.",
                    })
                })
            })
        } catch (err) {
            res.status(err.status);
            res.json({ message: err.message, success: false });
        }
    },
    'editUser': async (req, res) => {
        const { firstName, lastName, email, password } = req.body;
        try {
            validators.validateFirstName(firstName);
            validators.validateLastName(lastName);
            validators.validateEmail(email);
            validators.validatePassword(password);

            const existingUser = await User.findOne({email});
            if (!existingUser) {
                let err = new Error('User not found with provided email id.');
                err.status = 404;
                throw err;
            }
            bcrypt.hash(password, 12, function (err, hash) {
                if (err) {
                    let err = new Error('Internal server error.');
                    err.status = 500;
                    throw err;
                }

                User.updateOne({ email },{ firstName, lastName, password: hash })
                .then(() => {
                    res.send({
                        status: 200,
                        message: "User updated successfully",
                    })
                })
            })
        } catch (err) {
            res.status(err.status);
            res.json({ message: err.message, success: false });
        }
    },
    'deleteUser': async (req, res) => {
        const {email} = req.body;
        try {
            validators.validateEmail(email);
            const existingUser = await User.findOneAndRemove({email});

            if (!existingUser) {
                let err = new Error('User not found with provided email id.');
                err.status = 404;
                throw err;
            } else {
                res.status(200).send({
                    success: true,
                    message: "User deleted successfully!",
                    user: existingUser
                })
            }
        } catch (err) {
            res.status(err.status);
            res.json({ message: err.message, success: false });
        }
    },
    'getAll': async (req, res) => {
        const users = await User.find();
        if (users.length === 0) {
            res.status(204).send(users);
        } else {
            res.status(200).send(users);
        }
    }
}
module.exports = userController;