// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require("./models/heroModel");

// var heors =[
//   // put data here!
// ];

// // db.Hero.remove({}, function(err, albums){

//   db.Hero.create(heroList, function(err, albums){
//     if (err) { return console.log('ERROR', err); }
//     console.log("all heros:", heros);
//     console.log("created", heros.length, "heros");
//     process.exit();
//   });

// });


// This works.
// ToDo: [] Get the link to the heroModel.js working so that I can remove it from here. 

var Schema = mongoose.Schema;
var HeroSchema = new Schema({
    playerEmail: String,
    playerName: String,
    heroMantra: String,
    heroPower: Number
});

var Hero = mongoose.model('Hero', HeroSchema);

Hero.remove({}, function(err) {
  if (err) {
    console.log("ERROR: ", err);
  }
});

Hero.create({playerEmail: "zom@zombie.com (From Seed)", playerName: "Zom (From Seed)", heroMantra: "Challenges itself as honour! (From Seed)", heroPower: 3}, function (err, hero) {
  console.log(hero);
});

Hero.create({playerEmail: "romeo@romeo.com (From Seed)", playerName: "Romeo (From Seed)", heroMantra: "Ambassadors from rome. (From Seed)", heroPower: 2}, function (err, hero) {
  console.log(hero);
});

Hero.create({playerEmail: "seirdsisters@seirdsisters.com (From Seed)", playerName: "Weird Sisters (From Seed)", heroMantra: "Dunsinane he strongly fortifies. (From Seed)", heroPower: 1}, function (err, hero) {
  console.log(hero);
});