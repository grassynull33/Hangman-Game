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

document.onkeydown = function(e) {
	var theKey = e.key.toLowerCase();
	var theKeyCode = e.keyCode;

	if(theKeyCode >= 65 && theKeyCode <= 90 && allLettersGuessed.indexOf(theKey) === -1){
		allLettersGuessed.push(theKey);
		var html = "";
		for(var i = 0; i < allLettersGuessed.length; i++) {
			html += allLettersGuessed[i].toUpperCase();
		}
		lettersGuessedElement.innerHTML = html;
		console.log(allLettersGuessed);
	}
}