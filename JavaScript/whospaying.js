let names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
let numNames = names.length;
function whosPlaying(names) {
 
  console.log( names[(Math.floor(Math.random() * numNames))])
}

whosPlaying(names);