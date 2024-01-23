// var generateName = require("sillyname");
import generateName from "sillyname";
import superheroes from "superheroes";

var sillyName = generateName();


console.log(`My name is ${sillyName}.`);
console.log(`My superhero name is ${superheroes.random()}`);