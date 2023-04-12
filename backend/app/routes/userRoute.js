const express = require("express");
const {createUser, editUser, deleteUser, getAll} = require("../controllers/userController");

const router = express.Router();

//Create User
router.post('/signup', createUser)

// Edit User
router.put('/edit', editUser)

// Delete User
router.delete('/delete', deleteUser)

// Get All User
router.get('/getAll', getAll);

module.exports = router