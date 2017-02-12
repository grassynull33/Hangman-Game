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
var allLettersGuessed = [];
const maxAttempts = 15;
var guessCount = 0;
var guessesRemaining = maxAttempts - guessCount;

document.onkeydown = function(e) {
	var theKey = e.key.toLowerCase();
	var theKeyCode = e.keyCode;

	if(theKeyCode >= 65 && theKeyCode <= 90 && allLettersGuessed.indexOf(theKey) === -1 && guessesRemaining > 0){
		allLettersGuessed.push(theKey);
		var html = "";
		for(var i = 0; i < allLettersGuessed.length; i++) {
			html += allLettersGuessed[i].toUpperCase();
		}
		guessCountElement.innerHTML = guessesRemaining;
		guessCount++;
		guessesRemaining = maxAttempts - guessCount;
		lettersGuessedElement.innerHTML = html;
		console.log(allLettersGuessed);
	} else if(guessesRemaining === 0) {
		guessCountElement.innerHTML = maxAttempts;
		guessCount = 0;
		guessesRemaining = maxAttempts - guessCount;
		allLettersGuessed = [];
		lettersGuessedElement.innerHTML = "";
	}
}