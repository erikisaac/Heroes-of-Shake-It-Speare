var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var HeroSchema = new Schema({
    title: String,
    description: String
});
var Hero = mongoose.model('Hero', HeroSchema);

module.exports = Hero;