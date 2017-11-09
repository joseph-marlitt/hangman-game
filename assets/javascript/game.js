
//An array of words that fit the theme "Climbing"
var hangmanWords = [
"bouldering",
"belaying", 
"sending", 
"crimp", 
"lockoff", 
"gnarley", 
"sidepull", 
"overhang", 
"onsighting"
]

var alreadyGuessed = [];
var guessesRemaining = 10;
var points = 0;

// choose random word
var randomWord = hangmanWords[Math.floor(hangmanWords.length * Math.random())];

// Splits randomWord into its own string
var splitWord = randomWord.split ("");

// Creates an array of blanks with Splitword
var arrayOfBlanks = splitWord.map(function(i) {
	return i = ('_');
})
var letters = (/^[a-z]+$/) 

console.log(randomWord, splitWord, arrayOfBlanks)
document.getElementById("mysteryWord").innerHTML = arrayOfBlanks;


// Keypress recognition

document.onkeyup = function() {
      
    var letterGuessed = event.key.toLowerCase();
// Check if letter pressed exists in the hidden word.
		
	if (randomWord.includes(letterGuessed)) {
		for (var i = 0; i < randomWord.length; i++) {
			if (letterGuessed == randomWord[i]) {

			}
		}
	}

};

	

// Add letter to the array alreadyGuessed.

// If letter exists, replace the blank. 
	// 

// If the letter does not exist, -1 guesses remaining
// var word = document.getElementById("mysteryword");
// word.innerHTML = arrayOfBlanks;
// function newFunction () {
// document.getElementById("mysteryword").innerHTML = "Hello";
// }
// newFunction()
// document.getElementById("mysteryword").innerHTML;

// // On keystroke up, loop splitWord for matches


// for (i = 0; i < randomWord.length; i++) {
	

// document.getElementById("mysteryWord")
// var targetDiv = getElementById("mysteryWord");
// }

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

