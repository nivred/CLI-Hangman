// Letter Constructor
var Letter = function(character){
    this.character = character;
    this.display = function(guess){
        if (this.character === ' '){
            return ' ';
        } else if (guess.indexOf(this.character.toLowerCase()) > -1 || guess.indexOf(this.character.toUpperCase()) > -1){
            return this.character;
        } else {
            return '_';
        }
    }
}

// Export Module
module.exports = Letter;