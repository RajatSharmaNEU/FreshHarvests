const express = require('express');
const {uploadGroceryItems} = require("../controllers/adminController");
const multer = require("multer");


const upload = multer({dest: 'uploads/'});
const router = express.Router();
router.post('/uploadGroceryItems', upload.single('file'), uploadGroceryItems);

module.exports = router