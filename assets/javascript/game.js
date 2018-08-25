//declare base variables
var Words = ["BOULDER", "PROBLEM","YOSEMITE","CRUX","DYNO","MANTLE","GASTON"];
var gameWord = Words[(Math.floor(Math.random() * Words.length))];
var wordArray = [];
var wrongGuesses = [];
var correctGuesses = [];
var displayWord = "";
var remainingMisses = 7;
var isActive = false;
var wins = 0;

console.log(gameWord);

//cycle through selected word creating arrays used in game
for(var i = 0; i < gameWord.length; i++) {
  wordArray.push(gameWord[i]);
  correctGuesses.push("_");
  displayWord = displayWord + "_" + " ";
}

displayWord = displayWord.trim(); //trims the last space off the display text

//set initial values of correctGuesses span
document.getElementById("correctGuesses").innerHTML = displayWord;

//trigger functions on key press
document.onkeypress = function(event) {
  keyhandler(event);
};
//check if input key is a letter based on code
function alphacheck(event) {
  var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var keypress = event.key.toLowerCase();
  return alpha.includes(keypress);
}


// logic to grow game container on start button press
var startBtn = document.getElementById("start-btn");

startBtn.onclick = function() {
  // get container for game that needs height adjusted
  var gameContainer = document.getElementsByClassName("game-container")[0];
  gameContainer.style.height = '40%';
  startBtn.style.display = "none";
  isActive = true;
};

//function to refresh screen elements on guess
function textrefresh() {
  document.getElementById("correctGuesses").innerHTML = displayWord;
  document.getElementById("remainingMisses").innerHTML = remainingMisses;
  document.getElementById("wrongGuesses").innerHTML = wrongGuesses.toString()
}

//function that handles when a user presses a key
function keyhandler(event) {
  if(isActive) {
      if (alphacheck(event)) {
          var guess = event.key.toUpperCase();
          //checks if the guessed letter is in the target word
          if (wordArray.includes(guess)) {
              displayWord = "";
              //update correctGuesses and displayWord
              for (var j = 0; j < wordArray.length; j++) {
                  if (wordArray[j] === guess) {
                      correctGuesses[j] = guess;
                      displayWord = displayWord + correctGuesses[j] + " ";
                  }
                  else {
                      displayWord = displayWord + correctGuesses[j] + " ";
                  }
              }
              displayWord = displayWord.trim()
          }
          //if guessed letter is not included in the word, adds to miss counter and wrongGuesses array
          else {
              wrongGuesses.push(guess);
              remainingMisses = remainingMisses - 1;
          }
          //refresh screen elements
          textrefresh();
      }
  }
}

//checks made after a successful guess
function endgamecheck() {
  if(remainingMisses = 0 || wordArray.toString() === correctGuesses.toString()) {
    isActive = false;
    if (remainingMisses = 0) {
      document.getElementById("end-message").innerHTML = "Game Over";
    }
    else {
      isActive = false;
      wins = wins + 1;
      document.getElementById("end-message").innerHTML = "You Win!";
    }

  }
}

//displays play again prompt
