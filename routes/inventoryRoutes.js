const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');
const utilities = require("../utilities/index");

// Route to build inventory by classification view
router.get("/type/:classificationId", utilities.handleErrors(inventoryController.buildByClassificationId))
// Route to view specific inventory item detail
router.get("/detail/:invId", utilities.handleErrors(inventoryController.viewSpecificInvItemDetail))

module.exports = router;