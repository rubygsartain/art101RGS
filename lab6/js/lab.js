// index.js - Lab 6: Arrays and Objects
// Author: Ruby Grossman-Sartain
// Date: 10/26/2024

// Array
let myTransport = ["bicycle", "walking", "Metro Bus"];


// Object
let myMainRide = {
  make: "New Flyer",
  model: "BRT Plus",
  color: "Orange Poppy Image",
  year: 2022,

// Method Function
age: function () {
  return 2022 - this.year;
  } 

};

// Output
document.writeln("Getting Around:" + myTransport.join(", ") + "</br>");

// Trick
document.writeln("myMainRide:<pre>")
document.writeln("myMainRide:<pre>" + JSON.stringify(myMainRide, null, '\t') + "</pre>");




