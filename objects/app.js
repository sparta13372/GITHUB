// Make an object with all the properties for a graphic on the screen - width, height, color, position. These numbers could represent positions of wheels, eye colors, or rainbow lengths. In your create or draw function draw that object to the screen using the data in your object - using a series of fill commands, draw commands, and whatever else you need to draw the object to the screen. Try to not hard-code any numbers in the drawing commands - only use the object properties to set sizes, colors, or position.
// Then, create a function that takes one argument and draws an object to the screen using that object argument. Pass your object to that function as an argument, and have the function draw the object to the screen.


//sets parameters for a bike that is actually a bear
var bike = {
    width: 400,
    height: 200,
    radius: 200,
    x: 250,
    y: 300,
    color: "#fff000",
}

function setup () {
    createCanvas(1920,1080)
}

function draw () {
    background("#f00")
    superBike(bike)
}

// function superBike (b) {
//     fill(b.color)
//     rect(b.x,b.y,b.width,b.height)

// }

//draws bear using bike parameters
function superBike (b) {
    fill("#fff000")
    rect(b.x-100,b.y-100,b.width-50,b.height-30)
    rect(b.x-100,b.y,b.width-30,b.height-200)
    rect(b.x-200,b.y-20,b.width-200,b.height-30)
    rect(b.x+170,b.y+60,b.width-350,b.height-150)
    rect(b.x+70,b.y+60,b.width-350,b.height-150)
    circle(b.x,b.y,b.radius-100)
    circle(b.x-200,b.y,b.radius-100)
}