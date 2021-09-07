let prompt = require("prompt-sync")();

// code below (replace this example)
let guess;
let guesses = [];
//Generate a number between 0 and 999
let n = Math.floor(Math.random()*1000);
while (guess != n) {
  guess = prompt("Guess a number: ");
  if (isNaN(guess)){
    console.log("Not a number! Try again!");
  } else {
    if (guesses.indexOf(guess) > -1){
      console.log("Already Guessed!");
    } else {
      guesses.push(Number(guess));
      if (guess > n){
        console.log("Too High!");
      } else if (guess < n){
        console.log("Too Low!");
      } else {
        console.log("You Got It! You Took "+ guesses.length +" attempts!");
      }  
    }
  }
}