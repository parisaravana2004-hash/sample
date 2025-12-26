// Random Number Guessing Game

console.log("🎯 Welcome to the Guessing Game!");

const secretNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = 5; // dummy guess value

if (userGuess === secretNumber) {
  console.log("🎉 Wow! You guessed it right!");
} else {
  console.log("❌ Wrong guess!");
  console.log("Your guess:", userGuess);
  console.log("Secret number was:", secretNumber);
}

console.log("Game Over 👋");
