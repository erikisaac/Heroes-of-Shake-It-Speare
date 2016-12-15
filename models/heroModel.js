var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var HeroSchema = new Schema({
    playerEmail: String,
    playerName: String,
    heroMantra: String,
    heroPower: Number
});

var Hero = mongoose.model('Hero', HeroSchema);

module.exports = Hero;