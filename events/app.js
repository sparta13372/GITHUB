// Create an application with three grey, square divs, in a row. They should be 200px by 200px, and all floated left. Give them a margin of 5px.
// Using only one event handler, write event listeners to respond to a click on each element. Each element should change to a different color: one red, one green, and one blue. Use a data attribute on the elements to store the color to be changed to.

let squareOne = document.getElementById("squareOne")
let squareTwo = document.getElementById("squareTwo")
let squareThree = document.getElementById("squareThree")
let nestDiv = document.getElementsByClassName("nestDiv")

squareOne.style.height = 200 + "px"
squareOne.style.width = 200 + "px"
squareOne.style.backgroundColor = "#8a8a8a"

squareTwo.style.height = 200 + "px"
squareTwo.style.width = 200 + "px"
squareTwo.style.backgroundColor = "#8a8a8a"

squareThree.style.height = 200 + "px"
squareThree.style.width = 200 + "px"
squareThree.style.backgroundColor = "#8a8a8a"

function colorOne() {
    squareOne.style.backgroundColor = "#ff0000"
}

function colorTwo() {
    squareTwo.style.backgroundColor = "#247524"

}

function colorThree() {
    squareThree.style.backgroundColor = "#243c75"

}