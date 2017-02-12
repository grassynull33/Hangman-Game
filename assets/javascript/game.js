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
var randomWord = wordsArray[randomIndexOfArray].toLowerCase();
var allLettersGuessed = [];
const maxAttempts = 15;
var guessCount = 0;
var guessesRemaining = maxAttempts - guessCount;

function renderWord() {
	var html = "";
	for(var i = 0; i < randomWord.length; i++) {
		if(allLettersGuessed.indexOf(randomWord[i]) !== -1) {
			html += randomWord[i].toUpperCase();
		} else {
			html += "_";
		}
	}
	currentWordElement.innerHTML = html;
}

renderWord();

document.onkeydown = function(e) {
	var theKey = e.key.toLowerCase();
	var theKeyCode = e.keyCode;

	if(theKeyCode >= 65 && theKeyCode <= 90 && allLettersGuessed.indexOf(theKey) === -1){
		allLettersGuessed.push(theKey);
		if(randomWord.indexOf(theKey) === -1) {
			guessCount++;
		}
		guessesRemaining = maxAttempts - guessCount;
		if(guessesRemaining === 0) {
			guessCountElement.innerHTML = maxAttempts;
			guessCount = 0;
			guessesRemaining = maxAttempts - guessCount;
			allLettersGuessed = [];
			lettersGuessedElement.innerHTML = "";
			randomWord = wordsArray[randomIndexOfArray];
		} else {
			guessCountElement.innerHTML = guessesRemaining;
		}
		var html = "";
		for(var i = 0; i < allLettersGuessed.length; i++) {
			if(randomWord.indexOf(allLettersGuessed[i]) === -1) {
				html += allLettersGuessed[i].toUpperCase();
			}
		}
		lettersGuessedElement.innerHTML = html;
		renderWord();
	} 
}