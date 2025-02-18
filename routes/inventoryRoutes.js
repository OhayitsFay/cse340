const express = require('express');
const router = express.Router();
const invCont = require('../controllers/inventoryController');
const utilities = require("../utilities/index");

const validator = require("../utilities/inventory-validation")


// Route to manage inventory
router.get("/", utilities.isAdmin, utilities.handleErrors(invCont.viewInventoryManagement))

// Route to build inventory by classification view
router.get("/type/:classificationId", utilities.handleErrors(invCont.buildByClassificationId))

// Route to view specific inventory item detail
router.get("/detail/:invId", utilities.handleErrors(invCont.viewSpecificInvItemDetail))

// Route to add new classification
router.get("/add-classification", utilities.isAdmin, utilities.handleErrors(invCont.viewAddClassification))

// Route to add new inventory form
router.get("/add-inventory", utilities.isAdmin, utilities.handleErrors(invCont.viewAddInventory))

// Route to get inventory by classification id
router.get("/getInventory/:classification_id", utilities.handleErrors(invCont.getInventoryJSON))

// Route to edit specific inventory item
router.get("/edit/:inventoryId", utilities.isAdmin, utilities.handleErrors(invCont.viewEditInventory))

// Route to view delete form
router.get("/delete/:inv_id", utilities.isAdmin, utilities.handleErrors(invCont.viewDeleteInventory))

// Route to view inventory comments
router.get("/reviews/:inv_id", utilities.handleErrors(invCont.viewInventoryReviews))

// Route to submit new classification data
router.post(
  "/add/classification",
  utilities.isAdmin,
  validator.classificationRule(),
  validator.checkClassificationData,
  utilities.handleErrors(invCont.addClassification)
)

// Route to post new inventory
router.post(
  "/add/inventory", 
  utilities.isAdmin,
  validator.inventoryRules(),
  validator.checkInventoryData,
  utilities.handleErrors(invCont.addInventory)
)

router.post(
  "/update/",
  utilities.isAdmin,
  validator.inventoryRules(),
  validator.checkUpdateData,
  utilities.handleErrors(invCont.updateInventory)
)

// Route to delete a specified vehicle
router.post("/delete", utilities.isAdmin, utilities.handleErrors(invCont.deleteInventory))

// Route to add commment
router.post(
  "/add-review",
  validator.reviewRules(),
  validator.checkReviewData,
  utilities.handleErrors(invCont.addNewReview)
)

module.exports = router;