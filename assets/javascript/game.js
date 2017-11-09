
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
var points = 0
var letters = (/^[a-z]+$/) 
var randomWord = hangmanWords[Math.floor(hangmanWords.length * Math.random())];
var splitWord = randomWord.split ("");

// Creates an array of blanks with Splitword
var arrayOfBlanks = splitWord.map(function(i) {
	return i = ('_');
})
function startgame () {console.log(randomWord, splitWord, arrayOfBlanks)

document.getElementById("mysteryWord").innerHTML = arrayOfBlanks;


// Keypress recognition
// On keystroke up, loop for matches within word
document.onkeyup = function(press) {  
    var letterGuessed = (press.key);
    console.log(letterGuessed);
    var realLetter = "";
    alreadyGuessed.push(letterGuessed);

// Check if letter pressed exists in the hidden word.
	// if (randomWord.includes(letterGuessed)) {
	// 	console.log(letterGuessed)
		// If letter exists, replace the blank. 
		for (i = 0; i < alreadyGuessed.length; i++) 
          for(j = 0; j< arrayOfBlanks.length; j++){
			if (letterGuessed == randomWord[j]) {
				console.log("correct")
;				arrayOfBlanks[j] = letterGuessed;

			} // end replace blank
		}//end the loop for match
	}



	

// Add letter to the array alreadyGuessed.
// if (letterGuessed !== randomWord[i])

	
// If the letter does not exist, -1 guesses remaining

// var word = document.getElementById("mysteryword");

// word.innerHTML = arrayOfBlanks;
// function newFunction () {
// document.getElementById("mysteryword").innerHTML = "Hello";
// }
// newFunction()
// document.getElementById("mysteryword").innerHTML;

// 


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
}

