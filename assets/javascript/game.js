
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
var letters = (/^[a-z]+$/);
var randomWord = hangmanWords[Math.floor(hangmanWords.length * Math.random())];
var splitWord = randomWord.split ("");
var arrayOfBlanks = [];
var randomWord = hangmanWords[Math.floor(hangmanWords.length * Math.random())];
	var splitWord = randomWord.split ("");
// Creates an array of blanks with Splitword
function startGame(){

	for (i = 0; i < randomWord.length; i++) {
		arrayOfBlanks[i] = "_";
		$("#mysteryWord").html("Try and guess me! " + arrayOfBlanks.join(" "));
	console.log(arrayOfBlanks);
}
}
// Keypress recognition
// On keystroke up, loop for matches within word
document.onkeyup = function(press) {  
    var letterGuessed = (press.key);
    console.log(letterGuessed);
    var realLetter = " ";
   
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
				alreadyGuessed.push(letterGuessed);
				console.log(guessesRemaining);
				guessesRemaining --;
				$("#guessesRemaining").html("Guesses Remaining: " + guessesRemaining);
			}
			if (arrayOfBlanks == randomWord) {
				$("youwin").html("YOU SENDED THE GNAR!");
				points ++;
			}
			if (guessesRemaining == 0) {
				$("#youlose").html("You just fell to your death, nice one loser");
			}
	$("#guessesRemaining").html("Guesses Remaining: " + guessesRemaining);
	$("#mysteryWord").html("Try and guess me! " + arrayOfBlanks.join(" "));
	$("#lettersGuessed").html("Letters Guessed: " + alreadyGuessed);
	$("#points").html(" Points: " + points);
}

	

	

