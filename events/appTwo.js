// This is an application that will start a div at a black color, and as a user presses buttons associated with RGB, the div will change to new colors. The button presses should affect additively - that is. If a div is currently blue, pressing +red buttons will change the div to a purple color.
// 9 buttons (associated with red green and blue). There should be a +1, +5, and +10 button for each color.
// 1 div that will change colors to the rgb color calculated
// 1 div that shows the current calculated rgb color
// You must use attributes on the buttons for the values to change the colors by.

let color = document.getElementsByClassName("color")[0]
let hexCode = document.getElementsByClassName("hexCode")[0]
let colorCalc = document.getElementsByClassName("colorCalc")[0]

var red = 0
var green = 0
var blue = 0

function clickThis(event) {
    red += Number(event.target.getAttribute("data-red"))
    green += Number(event.target.getAttribute("data-green"))
    blue += Number(event.target.getAttribute("data-blue"))
    // console.log("red:" + red + " green:" + green + " blue:" + blue)
    color.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"
    hexCode.innerHTML = "rgb(" + red + "," + green + "," + blue + ")"
}