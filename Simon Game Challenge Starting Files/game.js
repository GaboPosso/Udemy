let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * (3 + 1));
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  for (let i = 0; i < gamePattern.length; i++) {
    switch (gamePattern[i]) {
      case "red":
        $("#red").fadeOut(100).fadeIn(100);
        // console.log("this selection is Red")

        break;
      case "blue":
        $("#blue").fadeOut(100).fadeIn(100);
        // console.log("this selection is blue")
        break;
      case "green":
        $("#green").fadeOut(100).fadeIn(100);
        // console.log("this selection is Green")
        break;
      case "yellow":
        $("#yellow").fadeOut(100).fadeIn(100);
        // console.log("this selection is Yellow")
        break;
      default:
        break;
    }

    // console.log(gamePattern);
  }
}
