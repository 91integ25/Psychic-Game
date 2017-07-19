


var compGuess = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","z"];
var lettersGuessed = [];
var guessesLeft = 8;
var	winCount = 1;
var loseCount = 1;


function lose() {

			if (guessesLeft <= 0 ){

				guessesLeft = 9;

				lettersGuessed = [];

				document.getElementById("losses").innerHTML = loseCount++;
				alert("you lose")

			}
			
		}
		
		function win() {
			alert("You win!!")
    			
    			document.getElementById('wins').innerHTML = winCount++;
    			lettersGuessed = [];
    			guessesLeft = 8;
		}
		
		function tryAgain() {
				
    			alert("try again")
				
				document.getElementById("guessesLeft").innerHTML = guessesLeft--;

				lettersGuessed.push(event.key);
				
				document.getElementById('guessedLetters').innerHTML = lettersGuessed;
		}
 
    
    document.onkeyup = function () {
		var	randomLetter = compGuess[Math.floor(Math.random() * compGuess.length)];
    		var userGuess = event.key;
    		lose();	
    		if (userGuess.indexOf(randomLetter) === -1){
    			tryAgain();
			}
			else {

				win();
			}
    			
	}



