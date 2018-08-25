//declare base variables
var Words = ["BOULDER", "PROBLEM","YOSEMITE","CRUX","DYNO","MANTLE","GASTON"];
var gameWord = Words[(Math.floor(Math.random() * Words.length))];
var wordArray = [];
var wrongGuesses = [];
var correctGuesses = [];
console.log(Words);
console.log(gameWord);
//cycle through selected word creating arrays used in game
for(var i = 0; i < gameWord.length; i++) {
    
}


// logic to grow game container on start button press
var startBtn = document.getElementById("start-btn");

startBtn.onclick = function(event) {
    // get container for game that needs height adjusted
    var gameContainer = document.getElementsByClassName("game-container")[0];
    gameContainer.style.height = '40%';
    startBtn.style.display = "none";
};

