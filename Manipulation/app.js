// Write the markup and JS to place a square div on the page. 100px by 100px, green background.
// Make it so that when the div its clicked, it increases its size by 10% every time.

let funDiv = document.getElementById("fun"); //sets id in java

var square = { //sets values for height and width
    height: 100,
    width: 100
}

//sets the divs size and color
funDiv.style.height = square.height + "px" 
funDiv.style.width = square.width + "px"
funDiv.style.backgroundColor = "#07f50f"


//increases values for height and width on click
function increase() {
    square.height = square.height * 1.1
    square.width = square.width * 1.1
    // console.log(square.height);
    funDiv.style.height = square.height * 1.1 + "px"
    funDiv.style.width = square.width * 1.1 + "px"
}