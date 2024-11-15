// index.js - Lab 8
// Author: Ruby Grossman-Sartain
// Date: 11/014/24

// Constants



// Functions


function sortingTruth(str)
 {
  len = str.length;
  mod = len % 4;
  if (mod ==0) {
    return "Without a doubt"
  }  
  else if (mod == 1) {
    return "It is certain"
  }
  else if (mod == 2) {
    return "Better not tell you now"
  }
else if (mod == 3) {
    return "Concentrate and ask again"
  }
else if (mod == 4) {
    return "Don't count on it"
  }
  else if (mod == 5) {
    return "Very doubtful"
  }
 }
 
 var myButton = document.getElementById("button");
 myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var answer = sortingTruth(input);
    return newText = "<p> The universe holds: " + answer + "</p>";
    document.getElementById("output").innerHTML = newText;
 })
