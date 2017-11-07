
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
function randomWord(){
	for (var i = hangmanWords.length - 1; i >= 0; i--) {
		hangmanWords[i]
	}
	var gameWord = hangmanWords[Math.floor(hangmanWords.length * Math.random())];
	console.log(gameWord);
}

randomWord();


// making the word seperate

// var splitWord = gameWord.split ("");
// var arrayOfBlanks = gameWord.map(function(x) {
// 	return x = ('_');
// });

//create an Array of Blanks for word
