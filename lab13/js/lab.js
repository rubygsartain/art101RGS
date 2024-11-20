// index.js - Lab 12
// Author: Ruby Grossman-Sartain
// Date: 11/14/24

// Constants



// Functions

function fizzBuzzBoom() {
  let oneLongString = ""; // Initialize an empty string to compile results

  for (let num = 1; num <= 200; num++) {
      let output = ""; // Initialize an empty output string for the current number

      // Check for multiples and build the output string
      if (num % 3 === 0) {
          output += "Fizz";
      }
      if (num % 5 === 0) {
          output += "Buzz";
      }
      if (num % 7 === 0) {
          output += "Boom";
      }

      // If output is empty, it means the number is not a multiple of 3, 5, or 7
      if (output === "") {
          output = num; // Just print the number
      } else {
          output += "!"; // Add an exclamation mark for Fizz, Buzz, Boom
      }

      // Append the result to the long string
      oneLongString += output + "<br>";
  }

  // Output the compiled string to the output div
  $("#output").html(oneLongString);
}

// Call the function to execute
fizzBuzzBoom();