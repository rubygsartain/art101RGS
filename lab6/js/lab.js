// index.js - Lab 6: Arrays and Objects
// Author: Ruby Grossman-Sartain
// Date: 10/26/2024

// Variables
myTransport = ["Metro Bus"]

// Object
myMainRide = {
  make = "New Flyer";
  model = "BRT Plus";
  color = "Orange Poppy Image";
  year = 2022,
//method function
age: function () {
  return 2022 - this.year
} 

}

// output
document.writeln("kinds of transportation I use:", myTransport, "</br>");
document.writeln("My main ride: <pre>"
  JSON.stringify(myMainRide, null, '\t'),"</pre>");


// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
