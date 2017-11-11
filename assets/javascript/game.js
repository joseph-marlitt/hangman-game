
//An array of words that fit the theme "Climbing"
var hangmanWords = [
"bouldering",
"belaying", 
"sending",
"dyno",
"campus",
"static", 
"crimp", 
"lockoff", 
"gnarley", 
"sidepull", 
"overhang",
"crush", 
"onsighting"
]
var randomWord = hangmanWords[Math.floor(hangmanWords.length * Math.random())];
var splitWord = randomWord.split ("");
var alreadyGuessed = [];
var guessesRemaining = 10;
var points = 0;
var letters = (/^[a-z]+$/);

var arrayOfBlanks = [];
// Creates an array of blanks with Splitwor

//Start the game
function startGame(){
	//choose a random word.
	var randomWord = hangmanWords[Math.floor(hangmanWords.length * Math.random())];
	var splitWord = randomWord.split ("");
	for (i = 0; i < randomWord.length; i++) {
		arrayOfBlanks[i] = "_";
		console.log(arrayOfBlanks);
		// Print scoring info on game start
		$("#mysteryWord").html("Try and guess me! " + arrayOfBlanks.join(" "));
		$("#guessesRemaining").html("Guesses Remaining: " + guessesRemaining);
		$("#lettersGuessed").html("Letters Guessed: " + alreadyGuessed);
	}


// Keystroke recognition.
document.onkeyup = function(press) { 
    var letterGuessed = (press.key);
    console.log(letterGuessed);
    $("#youlose").html("")
	$("#youwin").html("")
   
// Check if letter pressed exists in the hidden word.
	//loop for the word in blanks/has letter been guessed?
	for (i = 0; i < alreadyGuessed.length; i++) 
          for(j = 0; j< arrayOfBlanks.length; j++){

          	//Is the letter guessed correct?
			if (letterGuessed == randomWord[j]) {
				console.log("correct");
				arrayOfBlanks[j] = letterGuessed;
				console.log(arrayOfBlanks);
				$("#mysteryWord").html("Try and guess me! " + arrayOfBlanks.join(" "));
			} // end replace blank
		}
			//Is the guess wrong?
			if(randomWord.indexOf(letterGuessed) < 0) {
				if (alreadyGuessed.indexOf(letterGuessed) == -1) {
    				alreadyGuessed.push(letterGuessed);
    				guessesRemaining --;
			}
				console.log(guessesRemaining);
				$("#guessesRemaining").html("Guesses Remaining: " + guessesRemaining);
			}
			//How does the user win/reset.
			if (randomWord == arrayOfBlanks.join('')) {
				$("#youwin").html("Awesome climbing rockstar!");
				points ++;
				alreadyGuessed = [];
				arrayOfBlanks = [];
				guessesRemaining = 10;
				startGame();	
			}
			//How the use loses/reset.
			if (guessesRemaining == 0) {
				$("#youlose").html("You just fell to your death...");
				alreadyGuessed = [];
				arrayOfBlanks = [];
				guessesRemaining = 10;
				points = 0;
				startGame();
			}
			//print out results as game progesses
			$("#guessesRemaining").html("Guesses Remaining: " + guessesRemaining);
			$("#mysteryWord").html("Try and guess me! " + arrayOfBlanks.join(" "));
			$("#lettersGuessed").html("Letters Guessed: " + alreadyGuessed);
			$("#points").html(" Points: " + points);
	}//onclick function
}//startgame function

	

	

