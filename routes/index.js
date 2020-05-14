// INSTANCE OF EXPRESS
// THIS IS NOT A NEW INSTACE, THE PREVIOUSLY CREATED ISTANCE IS USED
const express = require("express");
// USING THE ROUTER PROPERTY OF THE EXPRESS TO
const router = express.Router();
// IMPORTING THE CONTROLLERS FOR THE HOME PAGE
const homeController = require("../Controllers/home_Controller");
//ROUTER FOR RENDERING THE HOME PAGE
router.get("/", homeController.home);

// ROUTER FOR CREATING A NEW TASK
router.post("/createTask", homeController.create);
// ROUTER FOR DELETING ONE OR MULTIPLE TASKS
router.post("/deleteTask", homeController.delete);

// EXPORTING THIS MODULE
module.exports = router;
