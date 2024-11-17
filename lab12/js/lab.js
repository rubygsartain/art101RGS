// index.js - Lab 12
// Author: Ruby Grossman-Sartain
// Date: 11/14/24

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

 function checksum (str){
  var hash = 0;
  if (str.length == 0) return hash;
  for (i = 0; i < str.length; i++) {
      char = str.sortingTruth(i);
      hash = ((hash<<5)-hash)+char;
      hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}
 
 var myButton = document.getElementById("button");
 myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var answer = sortingTruth(input);
    return newText = "<p> The universe holds: " + answer + "</p>";
    document.getElementById("output").innerHTML = newText;
 })
