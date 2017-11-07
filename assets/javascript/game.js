
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
document.getElementById("mysteryWord").innerHTML = 
for (var i = randomWord.length - 1; i >= 0; i--) {
	var splitWord = gameWord.split ("");
var arrayOfBlanks = splitWord.map(function(x) {
	return x = ('_');
});
}
console.log(randomWord)
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
