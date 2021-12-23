var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
    guess = prompt("Read, aim, fire! (Enter a number from 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a number between 0-6!");
    } else {
        guesses = guesses + 1
    }
}

/* page 55 */
