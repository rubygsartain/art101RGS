// index.js - Lab 12
// Author: Ruby Grossman-Sartain
// Date: 12/15/24

$(document).ready(function() {
    // Get the button element by its ID
    const button = document.getElementById('Activate');

    // Add a click event listener to the button
    button.addEventListener('click', function() {
        // Using the core $.ajax() method
        $.ajax({
            // The URL for the request (from the API docs)
            url: "https://api.nasa.gov/planetary/apod", // NASA API endpoint
            // The data to send (will be converted to a query string)
            data: {
                api_key: "njxUNBBITfn7v9re7H7AMgwQcRn7b2dJ8oJF8ULh" // Include api_key here
            },
            // Whether this is a POST or GET request
            type: "GET",
            // The type of data we expect back
            dataType: "json",
            // What do we do when the API call is successful
            success: function(data) {
                console.log(data); // Log the data for debugging
                $("#output").append("<h1>" + data.title + "</h1>"); // Use data.title for the title
                $("#output").append("<img src='" + data.url + "' alt='NASA Image'>"); // Use data.url for the image
            },
            // What we do if the API call fails
            error: function(jqXHR, textStatus, errorThrown) { 
                console.log("Error:", textStatus, errorThrown);
            }
        });
    });
});