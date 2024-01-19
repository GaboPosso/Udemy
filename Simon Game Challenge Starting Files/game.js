var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  $(this).addClass("pressed");
  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

$(document).keypress(function (e) {
  if (!started) {
    $("#level-title").html(`Level ${level}`);
    nextSequence();
    started = true;
  }
});

function nextSequence() {

  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);

  level++;
  $("#level-title").html(`Level ${level}`);
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

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("Success");
    if (userClickedPattern.length === gamePattern.length) {
      console.log("finished secuence");
      setTimeout(() => {
        nextSequence();
      }, 1000);      
    } 
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").html("Game Over, Press Any Key to Restart");
    setTimeout(()=> {
      $("body").removeClass("game-over")
    }, 200);
    startOver();
  }  
}

var startOver = () => {
  level = 0, 
  gamePattern = [],
  started = false;
} 
