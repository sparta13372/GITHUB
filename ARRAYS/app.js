// Write a loop that displays in a div the numbers 1000, 2000, 3000, 4000, 5000. There should only be one line of code inside of your loop.

let somethingDiv = document.getElementById("something") //sets divs id for coding

let something = 0 //sets "something" to be zero


//gives useless div a size and color
somethingDiv.style.width = "40px"
somethingDiv.style.height = "40px"
somethingDiv.style.backgroundColor = "#000ff0"


//sets loop to go through 1000 to 5000 by adding 1000 each time
for(let something = 1000; something < 6000; something += 1000) {
    console.log(something)
}