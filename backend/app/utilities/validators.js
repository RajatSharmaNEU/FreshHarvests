const nameRegex = /^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/;
const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateFirstName = function (name) {
    if(name == ""){
        let err = new Error('Please enter the First name.');
        err.status = 400;
        throw err;
    }
    let check = String(name).match(nameRegex)
    if (!check) {
        let err = new Error('Invalid firstName, please enter alphabetic first & last name, separate by space only.');
        err.status = 400;
        throw err;
    }
}

const validateLastName = function (name) {
    if(name == ""){
        let err = new Error('Please enter the Last name.');
        err.status = 400;
        throw err;
    }
    let check = String(name).match(nameRegex)
    if (!check) {
        let err = new Error('Invalid lastName, please enter alphabetic first & last name, separate by space only.');
        err.status = 400;
        throw err;
    }
}

const validateEmail = function (email) {
    if(email == ""){
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

module.exports = {validateFirstName, validateLastName, validateEmail, validatePassword};