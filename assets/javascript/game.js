var winCountElement = document.getElementById("win-count");
var currentWordElement = document.getElementById("current-word");
var guessCountElement = document.getElementById("guess-count");
var lettersGuessedElement = document.getElementById("failed-guesses");

var wordsArray = [
	"first",
	"second",
	"third"
];

var randomIndexOfArray = Math.floor(Math.random() * wordsArray.length);
var randomWord = wordsArray[randomIndexOfArray];