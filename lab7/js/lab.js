// index.js - Lab 7
// Author: Ruby Grossman-Sartain
// Date: 10/29/24

// Constants

// Functions


        function sortUserName() {
            var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
            console.log("userName =", userName);
            
            // Split string to array
            var nameArray = userName.split('');
            console.log("nameArray =", nameArray);
            
            // Sort array 
            var nameArraySort = nameArray.sort();
            console.log("nameArraySort =", nameArraySort);
            
            // Join array back to a string
            var nameSorted = nameArraySort.join('');
            console.log("nameSorted =", nameSorted);

            return nameSorted;

        }
            document.writeln("So much better now!!! Your new name = ",
              sortUserName(), "</br>");