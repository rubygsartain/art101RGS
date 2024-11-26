// index.js - Lab 12
// Author: Ruby Grossman-Sartain
// Date: 11/14/24

// Constants
const FALLBACK_IMAGE = 'path/to/fallback-image.jpg';
const IMAGE_PATHS = [
    'img/th.jpg',
    'img/57fb2f180ba83.jpg',
    'img/il_794xN.1695871734_of37.webp'
];

// Array of descriptions corresponding to each image
const IMAGE_DESCRIPTIONS = [
    "Snort turmeric to invigorate the third eye chakra.",
    "Carry green jasper to stimulate healthy bowel movement.",
    "I sense that someone is giving you the evil eye... protect your energy."
    
];

// Variables
let currentImageIndex = 0; // Track the current image index
let clickTimeout; // Variable to hold the timeout

// Functions
function sortingTruth(str) {
    let len = str.length;
    let mod = len % 6; // Change to 6 to match the number of responses
    switch (mod) {
        case 0: return "Without a doubt";
        case 1: return "It is certain";
        case 2: return "Better not tell you now";
        case 3: return "Concentrate and ask again";
        case 4: return "Don't count on it";
        case 5: return "Very doubtful";
    }
}

var myButton = document.getElementById("button");

myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var answer = sortingTruth(name);
    var newText = "<p>The universe holds: " + answer + "</p>";
    document.getElementById("output").innerHTML = newText;

    // Clear any existing timeout before setting a new one
    clearTimeout(clickTimeout);

    // Show the current image immediately
    showImage();

    // Set a timeout to change the image after 2 seconds
    clickTimeout = setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % IMAGE_PATHS.length; // Update the index for the next image
        showImage(); // Show the next image
    }, 2500); // 2000 milliseconds = 2 seconds
});

// Function to show the current image and its description
function showImage() {
    const imageContainer = document.getElementById('image');
    imageContainer.style.display = "block"; // Show the image container

    // Clear previous image and description
    imageContainer.innerHTML = '';

    // Create and display the current image
    const imgElement = document.createElement('img');
    imgElement.src = IMAGE_PATHS[currentImageIndex];
    imgElement.alt = 'Image ' + (currentImageIndex + 1);
    imgElement.style.maxWidth = "300px"; // Set max width for images
    imgElement.style.margin = "10px"; // Add some margin between images

    // Create and display the description
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = IMAGE_DESCRIPTIONS[currentImageIndex];
    descriptionElement.style.textAlign = "center"; // Center the description

    imageContainer.appendChild(imgElement); // Append image to container
    imageContainer.appendChild(descriptionElement); // Append description to container
}