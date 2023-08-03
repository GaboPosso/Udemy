function isLeap (year) {
  leap = "";
  if ( year % 4 === 0 && year % 400 === 0){
    leap = "Leap year."
  } else if (year % 100 === 0 && year % 400 !== 0) {
    leap = "Not leap year."
  } else if (year % 100 !== 0 && year % 4 === 0){
    leap = "leap year."
  } else {
    leap =  "Not leap year."
  }

  return leap;
} 
console.log(isLeap(1948));
console.log(isLeap(1998));
console.log(isLeap(2020));

