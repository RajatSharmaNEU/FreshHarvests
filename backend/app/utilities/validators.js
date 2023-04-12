const {add} = require("nodemon/lib/rules");
const nameRegex = /^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/;
const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const addressRegex = /^[a-zA-Z0-9\s,'-]*$/;
const phoneNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const validateFirstName = function (firstName) {
    if(!firstName || firstName == ""){
        let err = new Error('Please enter the First name.');
        err.status = 400;
        throw err;
    }
    let check = String(firstName).match(nameRegex)
    if (!check) {
        let err = new Error('Invalid firstName, please enter alphabetic first & last name, separate by space only.');
        err.status = 400;
        throw err;
    }
}

const validateLastName = function (lastName) {
    if(!lastName || lastName == ""){
        let err = new Error('Please enter the Last name.');
        err.status = 400;
        throw err;
    }
    let check = String(lastName).match(nameRegex)
    if (!check) {
        let err = new Error('Invalid lastName, please enter alphabetic first & last name, separate by space only.');
        err.status = 400;
        throw err;
    }
}

const validateEmail = function (email) {
    if(!email || email === ""){
        let err = new Error('Please enter the email.');
        err.status = 400;
        throw err;
    }
    let check = String(email).match(emailRegex)
    if (!check) {
        let err = new Error('Please enter a valid email.');
        err.status = 400;
        throw err;
    }
}

const validateAddress = function (address) {
    if(!address || address === ""){
        let err = new Error('Please enter the address.');
        err.status = 400;
        throw err;
    }
    let check = String(address).match(addressRegex)
    if (!check) {
        let err = new Error('Please enter a valid address.');
        err.status = 400;
        throw err;
    }
}

const validatePhoneNumber = function (phoneNumber) {
    if(!phoneNumber || phoneNumber === ""){
        let err = new Error('Please enter the phone number.');
        err.status = 400;
        throw err;
    }
    let check = String(phoneNumber).match(phoneNumberRegex)
    if (!check) {
        let err = new Error('Please enter a valid phone number.');
        err.status = 400;
        throw err;
    }
}

const validatePassword = function (password) {
    if(password == ""){
        let err = new Error('Please enter the password.');
        err.status = 400;
        throw err;
    }
    let check = String(password).match(passwordRegex)
    if (!check) {
        let err = new Error('Password must have 8 characters with at least a symbol, upper and lower case letters and a number');
        err.status = 400;
        throw err;
    }
}

module.exports = {validateFirstName, validateLastName, validateEmail, validateAddress, validatePhoneNumber,validatePassword};