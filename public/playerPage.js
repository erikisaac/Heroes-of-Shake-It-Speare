console.log('Javascript online for the Players Page!');

// var catListParsed = [];
// var fullCatList = [];

// var catList = $.get("https://ga-cat-rescue.herokuapp.com/api/cats").done(function(catList){
// 	catListParsed = jQuery.parseJSON(catList);
// 	// var fullCatList = [];
// 	console.log("Cat makeer working.");
// 	for (var  i = 0; i < catListParsed.length; i++) {
// 		fullCatList.push(catListParsed[i].name);
// 	};
// 	console.log("this is the full cat list: " + fullCatList);
// 	var firstCat = catListParsed[0];
// 	console.log(firstCat);
// 	console.log(firstCat.name);
// 	console.log(catList);
// 	displayCatList();
// });

// http://shakeitspeare.com/api/sentence

var y = "?!?!?";
var x;

var shakeItSpeareSentence = $.get('http://shakeitspeare.com/api/sentence').done(function(shakeItSpeareSentence){
	// var shakeItSpeareSentenceParced = jQuery.parseJSON(shakeItSpeareSentence);
	console.log("This is the Shake-It-Speare sentence: " + shakeItSpeareSentence.sentence);
	x = shakeItSpeareSentence.sentence;
	console.log("This is x from the function: " + x)
});

console.log("This is y: " + y);
console.log("This is x from js: " + x) ; 

// module.exports = x;