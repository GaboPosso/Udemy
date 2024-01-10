let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * (3 + 1));
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  for (let i = 0; i < gamePattern.length; i++) {
    switch (gamePattern[i]) {
      case "red":
        $("#red").animate({opacity:0.5}, 500);
        // console.log("this selection is Red")

        break;
      case "blue":
        $("#blue").animate({opacity:0.5}, 500);
        // console.log("this selection is blue")
        break;
      case "green":
        $("#green").animate({opacity:0.5}, 500);
        // console.log("this selection is Green")
        break;
      case "yellow":
        $("#yellow").animate({opacity:0.5}, 500);
        // console.log("this selection is Yellow")
        break;
      default:
        break;
    }

    // console.log(gamePattern);
  }
}
