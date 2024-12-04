// index.js - Lab 12
// Author: Ruby Grossman-Sartain
// Date: 11/25/24

// Ensure jQuery is included in your HTML file
// <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

// Get the button element by its ID
const button = document.getElementById('activate');

// Add a click event listener to the button
button.addEventListener('click', function() {
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (from the API docs)
        url: "https://yourapiendpoint.com/", // Replace with your actual API endpoint
        // The data to send (will be converted to a query string)
        data: { 
            // Here is where any data required by the API goes (check the API docs)
            id: 123,
            api_key: "blahblahblah", // Replace with your actual API key
        },
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType: "json",
        // What do we do when the API call is successful
        success: function(data) {
            // Do stuff with the data
            console.log(data);
        },
        // What we do if the API call fails
        error: function(jqXHR, textStatus, errorThrown) { 
            // Do stuff
            console.log("Error:", textStatus, errorThrown);
        }
    });
});

