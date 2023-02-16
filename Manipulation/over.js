// Write the markup and JavaScript to place a square div on the page (100px x 100px), with a blue background. Using onmouseover and onmouseout (instead of "onclick"), change the div's color to black when the mouse is over the div, and back to blue when the mouse leaves.


let blueDiv = document.getElementById("blue");

var square = {
    height: 100,
    width: 100
}

blueDiv.style.height = square.height + "px"
blueDiv.style.width = square.width + "px"
blueDiv.style.backgroundColor = "#05009f"


//sets values for the onmouseover and onmouseout function
function over() {
    blueDiv.style.backgroundColor = "#05009f"
}

function out() {
    blueDiv.style.backgroundColor = "#000"
}