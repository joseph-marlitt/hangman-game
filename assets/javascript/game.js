
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


function startGame(){

	var randomWord = hangmanWords[Math.floor(hangmanWords.length * Math.random())];
	var splitWord = randomWord.split ("");
	// Keypress recognition
	for (i = 0; i < randomWord.length; i++) {
		arrayOfBlanks[i] = "_";
		$("#mysteryWord").html("Try and guess me! " + arrayOfBlanks.join(" "));
		console.log(arrayOfBlanks);
	}


// On keystroke up, loop for matches within word
document.onkeyup = function(press) { 
    var realLetter = " ";
    var letterGuessed = (press.key);
    console.log(letterGuessed);
    $("#youlose").html("")
	$("#youwin").html("")
   
// Check if letter pressed exists in the hidden word.
	 	
	for (i = 0; i < alreadyGuessed.length; i++) 
          for(j = 0; j< arrayOfBlanks.length; j++){

			if (letterGuessed == randomWord[j]) {
				console.log("correct");
				arrayOfBlanks[j] = letterGuessed;
				console.log(arrayOfBlanks);
				$("#mysteryWord").html("Try and guess me! " + arrayOfBlanks.join(" "));
			} // end replace blank
		}
			if(randomWord.indexOf(letterGuessed) < 0) {
				if (alreadyGuessed.indexOf(letterGuessed) == -1) {
    				alreadyGuessed.push(letterGuessed);
    				guessesRemaining --;
			}
				console.log(guessesRemaining);
				
				$("#guessesRemaining").html("Guesses Remaining: " + guessesRemaining);
			}
			if (randomWord == arrayOfBlanks.join('')) {
				$("#youwin").html("YOU SENT THE PROBLEM!");
				points ++;
				alreadyGuessed = [];
				arrayOfBlanks = [];
				guessesRemaining = 10;
				startGame();
				

			}
			if (guessesRemaining == 0) {
				$("#youlose").html("You just fell to your death, nice one loser");
				alreadyGuessed = [];
				arrayOfBlanks = [];
				guessesRemaining = 10;
				points = 0;
				startGame();
			}

	$("#guessesRemaining").html("Guesses Remaining: " + guessesRemaining);
	$("#mysteryWord").html("Try and guess me! " + arrayOfBlanks.join(" "));
	$("#lettersGuessed").html("Letters Guessed: " + alreadyGuessed);
	$("#points").html(" Points: " + points);
}//onclick function
}//startgame function

	

	

