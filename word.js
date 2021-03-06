// Require Dependencies
var Letter = require('./letter.js');
var randomWord = require('random-words');

// Word Constructor
var Word = function(){
    this.currentWord = "";
    this.guessedLetters = [];
    // generates new word to be guessed
    this.newWord = function(){
        this.currentWord = randomWord();
        this.guessedLetters = [];
    };
    // evaluates incorrect guesses, adds them to an array, and subtracts from remaining guesses
    this.wrongGuess = function(letter){
        // checks if letter has already used
        if (this.guessedLetters.indexOf(letter.toLowerCase()) === -1 && this.guessedLetters.indexOf(letter.toUpperCase()) === -1){
            // adds incorrect letter to the array
            this.guessedLetters.push(letter);
            // reduces amount of remaining guesses
            if (this.currentWord.indexOf(letter.toLowerCase()) === -1 && this.currentWord.indexOf(letter.toUpperCase()) === -1){
                return true;
            } else {
                return false;
            }
        // if letter already used display the following warning
        } else {
            console.log(letter + " was already used");
            return false;
        }
    };
    // display progress of word being solved
    this.display = function(){
        var wordProgress = "";
        for (var i=0; i < this.currentWord.length; i++){
            var letter = new Letter(this.currentWord[i]);
            wordProgress += letter.display(this.guessedLetters)
        };
        return wordProgress;
    };
};

// Export Word Module
module.exports = Word;