// index.js - purpose and description here
// Author: Your Name
// Date:

// start with a white page
// something to type in the color name

  // window prompt
function chooseColor () {

  let askColor = window.prompt("What color? ");
  console.log (askColor);
  $("BODY").css("background-color", askColor );
  return askColor; 

}


$("button").click(chooseColor);


// change the page color according to the user input

  // make random color





