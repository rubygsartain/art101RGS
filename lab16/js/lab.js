// index.js - Lab 16
// Author: Ruby Grossman-Sartain
// Date: 12/3/24


// index.js - Lab 16
// Author: Ruby Grossman-Sartain
// Date: 12/3/24

$(document).ready(function() {
    $.ajax({
        // The URL for the request (from the API docs)
        url: "https://xkcd.com/info.0.json", // Corrected to the actual endpoint for the xkcd API
        // The data to send (will be converted to a query string)
        // No need to send id or api_key for this specific API
        // If you need to send parameters, you can add them here
        // data: { id: 123 }, // Example if needed

        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType: "json",
        // What do we do when the API call is successful
        success: function(data) {
            // Do stuff with the data
            console.log(data);
            // You can also display the data on the webpage
            $('#content').append(`<h3>${data.title}</h3><img src="${data.img}" alt="${data.alt}">`);
        },
        // What we do if the API call fails
        error: function(jqXHR, textStatus, errorThrown) { 
            // Do stuff
            console.log("Error:", textStatus, errorThrown);
        }
    });
});


