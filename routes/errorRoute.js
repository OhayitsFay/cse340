const express = require('express');
const router = express.Router();

const baseController = require("../controllers/baseController")
const utilities = require("../utilities/index")

// Route to build inventory by classification view
router.get("/test", utilities.handleErrors(baseController.errorTest))

module.exports = router;