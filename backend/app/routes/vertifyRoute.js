const express = require("express");
const {getAll, addList} = require("../controllers/storeController");

const router = express.Router();

router.get('/getAll', getAll);
router.post('/addList', addList)

module.exports = router