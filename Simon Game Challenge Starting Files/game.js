var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  $(this).addClass("pressed");
  playSound(userChosenColour);
  animatePress(userChosenColour);
});

//3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  
  playSound(randomChosenColour);
  
}
  function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }

function animatePress(currentColour) {
 setTimeout(() => {
  $(".btn").removeClass("pressed");
 }, 100);
}