let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 3 + 1);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
}

