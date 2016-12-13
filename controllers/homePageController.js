// var db = require('../models');

// var cargoCreate = function(req, res) { //and look at that controller
// 	db.Cargo.create({description: req.body.description, title: req.body.title}, function(error, cargo) {
// 		res.render('cargoShow', {cargo: cargo});
// 	});
// };

// var cargoNew = function(req, res) { //look at that controller
// 	res.render('cargoNew'); 
// };

var makeHomePage = function(req, res) {
	res.render('makeHomePage');
	console.log('This should show when the HOME page render is activated.')
};

var playerPage = function(req, res) {
	res.render('playerPage');
	console.log('This should show when the PLAYER page render is activated.')
};

// module.exports.cargoCreate = cargoCreate;
// module.exports.cargoNew = cargoNew;

module.exports.makeHomePage = makeHomePage;
module.exports.playerPage = playerPage;