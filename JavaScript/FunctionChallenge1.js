function bmiCalculator(weight, height) {
  var result = weight / (height**2);
  return result;
}


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
var bmi = Math.round(bmiCalculator(65, 1.8));

console.log(bmi);