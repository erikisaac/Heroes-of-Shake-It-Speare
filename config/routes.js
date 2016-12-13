var express = require('express');
var router = express.Router();

// var db = require('../models');

// var cargoController = require('../controllers/cargoController');

// //Cargo form
// router.get('/cargo/new', cargoController.cargoNew);

// //Add new cargo
// router.post('/cargo', cargoController.cargoCreate);

// To Do: [X] Add a route to create the home page.
var homePageController = require('../controllers/homePageController');

router.get('/', homePageController.makeHomePage);

// This is the route to the /player page
router.get('/player', homePageController.playerPage)

module.exports = router;