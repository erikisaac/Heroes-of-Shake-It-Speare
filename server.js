// Set up Express
var express = require('express');
var app = express();

// Set up bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Set up EJS
app.set('views', __dirname + "/views");
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Routes
// Note: This is the route to the index page.
var routes = require('./config/routes');
app.use('/', routes);

// Start server
app.listen(3000, function() {
	console.log("Listening at http://localhost:3000");
});