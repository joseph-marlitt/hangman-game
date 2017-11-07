
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

// Splits randomWord into its own string
var splitWord = randomWord.split ("");

// Creates an array of blanks with Splitword
var arrayOfBlanks = splitWord.map(function(i) {
	return i = ('_');

})
console.log(randomWord, splitWord, arrayOfBlanks)
// var word = document.getElementById("mysteryword");
// word.innerHTML = arrayOfBlanks;

document.getElementById("mysteryword").innerHTML = splitWord;
// document.getElementById("mysteryword").innerHTML;

// On keystroke up, loop splitWord for matches


// for (i = 0; i < randomWord.length; i++) {
	

// document.getElementById("mysteryWord")
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
