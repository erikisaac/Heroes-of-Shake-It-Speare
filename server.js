// Set up Express
var express = require('express');
var app = express();

// NOTE: This was added to get the site to use the databace!
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/hosis");

// Set up bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// This is a test to see if I can link to the public folder.
// This linked! And it seams that everything at / goes there now. I might have to test this in the future.
app.use(express.static(__dirname + '/public')); 

// Set up EJS
app.set('views', __dirname + "/views");
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Routes
// Note: This is the route to the index page.
var routes = require('./config/routes');
app.use('/', routes);

// This is atempting to let the makeHomePage.ejs access the database.
var heroController = require("./controllers/heroController");
app.get("/", heroController.index);

// Start server
// app.listen(3000, function() {
// 	console.log("Listening at http://localhost:3000");
// });

// Start Server for Heroku
app.listen(process.env.PORT || 3000)