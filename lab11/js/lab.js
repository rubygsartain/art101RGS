/*

// index.js - Lab 11
// Author: Ruby Grossman-Sartain
// Date: 11/016/24

*/




// functions

// sorts the characters of a string in alphabetical order

function sortString(inputString) {
return inputString.split('').sort().join('');
}

// event listener for button

$("#submit").click(function() {
// get input field value
const userName = $("#user-name").val();

// check for entered name

if (userName) {
    const userNameSorted = sortString(userName);

$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>')

} else {

// select output div/append a new div with mod username

$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');

}

});





















