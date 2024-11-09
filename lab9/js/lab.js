// index.js - Lab 8
// Author: Ruby Grossman-Sartain
// Date: 11/03/24

// Constants



// Functions

// button to challenge section

$("#challenge").append("<button id='button-challenge'>Make special</button>");

// add click listener

$("#button-challenge").click(function(){
$("#challenge").toggleClass("special");
});

// add a button to problem section

$("#problems").append("<button id='button-problems'>Make special</button>");

// add a click listener

$("#button-problems").click(function(){
$("#problems").toggleClass("special");
});

// button for results section

$("#results").append("<button id='button-results'>Make special</button>");

$("#button-results").click(function(){
$("#results").toggleClass("special");
});












