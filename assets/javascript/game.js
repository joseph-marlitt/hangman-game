
//An array of words that fit the theme "Climbing"
var hangmanWords = [
"bouldering",
"belaying", 
"sending", 
"crimp", 
"lockoff", 
"gnarley", 
"bruhbruhbruh", 
"overhang", 
"onsighting"
]


// choose random word

var randomWord = hangmanWords[Math.floor(hangmanWords.length * Math.random())];
// Splits random word into string
var splitWord = randomWord.split ("");

// creates an array of blanks with Splitword
var arrayOfBlanks = splitWord.map(function(i) {
	return i = ('_');
})

// for (i = 0; i < randomWord.length; i++) {
// 	var splitWord = 
	
// 	// });
// }
// document.getElementById("mysteryWord").innerHTML = x.arrayOfBlanks
console.log(randomWord, splitWord, arrayOfBlanks)
document.getElementById("mysteryWord")
// var targetDiv = getElementById("mysteryWord");


// randomWord();


// making the word seperate
// function randomWord(){
// 	for (var i = hangmanWords.length - 1; i >= 0; i--) {
// 		hangmanWords[i]
// 	}
// 	var gameWord = hangmanWords[Math.floor(hangmanWords.length * Math.random())];
// 	console.log(gameWord);
// }


//create an Array of Blanks for word
