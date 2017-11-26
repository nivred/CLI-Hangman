// Require Dependencies
var Word = require("./word.js");

// Play Constructor
var Play = function(){
    this.word = new Word();
    this.remainingGuesses = 10;
    this.playStart = function(){
        this.word.newWord();
    };
    this.guess = function(letter){
        // runs wrongGuess function
        var incorrect = this.word.wrongGuess(letter);
        // if incorrect is true then remaining guesses are decreased
        if (incorrect) {
            this.remainingGuesses--
        }
        this.progressUpdate();
    };
    this.progressUpdate = function(){
        console.log(this.word.display() + "\nRemaining Guesses " + this.remainingGuesses + "\n");
    };
};

// Export Module
module.exports = Play;