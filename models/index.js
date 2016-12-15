var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/hosis");

module.exports.Hero = require('./heroModel.js');