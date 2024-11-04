// index.js - Lab 8
// Author: Ruby Grossman-Sartain
// Date: 11/03/24

// Constants

var numbers = [2, 4, 6, 8];
var importantcalculations = [4, 8, 92, 87, 1]

// Functions

function cube(x) {
    return x*x*x;
}

function add47(x) {
    return x+47;
}

// Callback

var cubeResult = importantcalculations.map(cube);
console.log("My Array: ", importantcalculations);
console.log("My Array: ", cubeResult);

var add47Result = numbers.map(add47);
console.log("Hey, Array: ", numbers);
console.log("Hey, Array: ", add47Result)

// Anon Function 





