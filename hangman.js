// Require Module Dependencies
var inquirer = require("inquirer");
var Play = require("./play.js");

// Initialize Play Module with a new game
function newGame(){
    var game = new Play();
    game.playStart();
    game.progressUpdate();
    playGame(game);
}

function playGame(game){
    // prompts user to guess a letter
    inquirer.prompt({
        type: "input",
        name: "guess",
        message: "Guess a letter: "
    })
    .then(function(answer){
        game.guess(answer.guess);
        // checks if user won and starts new game
        if(game.word.showProgress().indexOf('_') === -1){
            console.log('CONGRATS! YOU WIN');
            return newGame();
        // checks if user lost and starts new game
        } else if (game.remainingGuesses === 0){
            console.log("YOU LOSE! GAME OVER \n The word was: "+ game.word.currentWord + "\n");
            return newGame();
        }
        // recursively keep playing game
        playGame(game);
    })
}

// Start Game
newGame();