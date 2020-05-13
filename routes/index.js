const express = require("express");

const router = express.Router();

const homeController = require("../Controllers/home_Controller");
router.get("/", homeController.home);
router.post("/createTask", homeController.create);
module.exports = router;
