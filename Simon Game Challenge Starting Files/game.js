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
        var audioRed = new Audio('./sounds/red.mp3');
        audioRed.play();
        break;
      case "blue":
        $("#blue").fadeOut(100).fadeIn(100);
        var audioBlue = new Audio('./sounds/blue.mp3');
        audioBlue.play();
        // console.log("this selection is blue")
        break;
      case "green":
        $("#green").fadeOut(100).fadeIn(100);
        var audioGreen = new Audio('./sounds/green.mp3');
        audioGreen.play();
        // console.log("this selection is Green")
        break;
      case "yellow":
        $("#yellow").fadeOut(100).fadeIn(100);
        var audioYellow = new Audio('./sounds/yellow.mp3');
        audioYellow.play();
        // console.log("this selection is Yellow")
        break;
      default:
        break;
    }

    // console.log(gamePattern);
  }
}
