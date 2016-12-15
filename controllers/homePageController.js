// var db = require('../models');

// var cargoCreate = function(req, res) { //and look at that controller
// 	db.Cargo.create({description: req.body.description, title: req.body.title}, function(error, cargo) {
// 		res.render('cargoShow', {cargo: cargo});
// 	});
// };

// var cargoNew = function(req, res) { //look at that controller
// 	res.render('cargoNew'); 
// };

// I need to get the hero model used here so i can use it to  do hero. stuff.
// NOTE: I might have solved this with the index.js
//require hero
// var db = require('./models');

var db = require('../models/heroModel.js');

var makeHomePage = function(req, res) {
	// TODO: This is where the info from the databace can be gotten and attacked to the ejs...
	// mongoos show hero
	// var for the data

	// var xxx = db.find({playerName:"Zom"}, function(err, docs){
 //    	// res.render('makeHomePage',{data:docs});     
	// });

	//  db.Hero.find({}, function(error, cargo) {
	// 	// res.render('cargoShow', {cargo: cargo});
	// 	console.log(xxx);
	// });

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