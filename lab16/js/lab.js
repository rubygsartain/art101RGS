// index.js - Lab 16
// Author: Ruby Grossman-Sartain
// Date: 12/15/24

let endpoint = "https://api.nasa.gov/planetary/apod";

// configure ajax request
let ajaxConfig = {
    url: endpoint,
    method: "GET",
    dataType: "json",
    data: {
        api_key: "njxUNBBITfn7v9re7H7AMgwQcRn7b2dJ8oJF8ULh"
    },
    success: function(data) {
        // No need to access data[0] since the response is a single object
        let record = data;
        $("#yay output").append("<h2>" + record.title + "</h2>");
        $("#yay output").append("<img src='" + record.url + "' alt='" + record.title + "'>");
        $("#yay output").append("<p>" + record.explanation + "</p>");
    },
    error: function(xhr, status, error) {
        console.error(error);
    }
};

// Append initial message
$("#yay output").append("<h1>yay</h1>");

// send ajax request
$.ajax(ajaxConfig);