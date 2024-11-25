/*

// index.js - Lab 10
// Author: Ruby Grossman-Sartain
// Date: 11/023/24

*/

// main.js

function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. mama a girl behind YOU <3";
    
    const min = 3;
    const max = Math.min(100, text.length);
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    
    return text.slice(randStart, randStart + randLen);
}

$(document).ready(function() {
    let isSender = true; // alternate between sender and receiver
    $("#lets-chat").click(function() {
        const newText = generateRandomText();
        const messageClass = isSender ? 'sender' : 'receiver';
        
        $("#output").append(`<div class="text ${messageClass}"><p>${newText}</p></div>`);
        
        isSender = !isSender; // Toggle the flag for the next message
    });
});