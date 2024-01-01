const d = document;
// d.querySelector("button").addEventListener("click", (e) => {
//   alert("I got clicked");
// });
const element = d.querySelectorAll(".drum");
// console.log(element);
element.forEach((element) => {
  element.addEventListener("click", function() {
    // var audio = new Audio("./sounds/tom-1.mp3");
    // audio.play();
    console.log(this.style.color = "white");
  });
});
