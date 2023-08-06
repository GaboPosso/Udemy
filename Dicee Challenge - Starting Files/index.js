let randomNumber = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber)
let randomDiceImage = "images/dice" + randomNumber + ".png";

let image1 = document.querySelectorAll("img")[0];
let image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomDiceImage);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

image2.setAttribute("src", randomDiceImage2);

if (randomDiceImage > randomDiceImage2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
} else if (randomDiceImage == randomDiceImage2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
