//An array of words that fit the theme
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
var gameWord = hangmanWords[Math.floor(hangmanWords.length * Math.random())];
console.log (gameWord);

//making the word seperate
var gameWord = word.split ();


//create an Array of Blanks
var arrayOfBlanks = gameWord.map(function(gameWord){
	rerturn '_'
}