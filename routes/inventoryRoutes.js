const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Route to build inventory by classification view
router.get("/type/:classificationId", inventoryController.buildByClassificationId);
module.exports = router;