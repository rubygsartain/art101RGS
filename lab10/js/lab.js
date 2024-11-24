/*

// index.js - Lab 10
// Author: Ruby Grossman-Sartain
// Date: 11/016/24

*/




// functions

// functions

function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    
    const min = 3;
    const max = Math.min(100, text.length); // Ensure max does not exceed text length
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    
    // Random starting index
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    
    // Generate text
    return text.slice(randStart, randStart + randLen);
}

// Event listener
$(document).ready(function() {
    $("#lets-chat").click(function() {
        // Generate new text when the button is clicked
        const newText = generateRandomText();
        
        // New div with new text
        $("#output").append(`<div class="text"><p>${newText}</p></div>`); // Using template literals
    });
});





















