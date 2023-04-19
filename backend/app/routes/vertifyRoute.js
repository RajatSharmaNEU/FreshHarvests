const express = require("express");
const {sendOtp, getAll, verifyOtp} = require("../controllers/verifyController");

const router = express.Router();

router.post('/sendOtp', sendOtp);
router.get('/getAll', getAll);
router.post('/verifyOtp', verifyOtp);

module.exports = router