// Put a div on the page. When the div is clicked, append the text "mc" to whatever is in its innerHTML. After 3 clicks, the div will show "mcmcmc"

let mcdDiv = document.getElementById("mcd");

var square = {
    height: 100,
    width: 400
}

mcdDiv.style.height = square.height + "px"
mcdDiv.style.width = square.width + "px"
mcdDiv.style.backgroundColor = "#01209f"

function change() {
    mcdDiv.innerHTML += "mc"
}