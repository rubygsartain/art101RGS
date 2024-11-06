// index.js - Lab 8
// Author: Ruby Grossman-Sartain
// Date: 11/03/24

// Constants



// Functions

// button to challenge section

$("#challenge").append("<button id='make-challenge-special'>Make Special</button>");

// add click listener

$("#make-challenge-special").click(function(){
console.log("click!");
$("challenge").toggleClass("special");
});

// add a button to problem section

$("#problems").append("<button id='make-problem-special'>Make Special</button>");

// add a click listener

$("#make-problem-special").click(function(){
$("#problems").toggleClass("special");
});

// button for results section

$("#results").append("<button id='make-results-special'>Make Special</button>");
$("#make-results-special").click(function(){
$("#results").toggleClass("special")
})










