const express = require("express");

const router = express.Router();

const homeController = require("../Controllers/home_Controller");
router.get("/", homeController.home);

module.exports = router;
