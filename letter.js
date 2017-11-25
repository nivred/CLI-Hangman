// Letter Constructor
var Letter = function(character){
    this.character = character;
    this.display = function(guessedLetters){
        if (this.character === ' '){
            return ' ';
        } else if (guessedLetters.indexOf(this.character.toLowerCase()) > -1 || guessedLetters.indexOf(this.character.toUpperCase()) > -1){
            return this.character;
        } else {
            return '_';
        };
    };
};

// Export Module
module.exports = Letter;