// Create a composition of some object - a car, a rocket, a set of keys.
// Move that composition code into a new function ("drawKeys()", for instance).
// Add two arguments to the function (x and y)
// Use those arguments to control the position of each of the drawing calls in the function (things like rect() and circle())
// Finally, either:
// Place the function call in the draw() function, and have your composition follow mouseX and mouseY


//create canvas
function setup () {
    createCanvas(1920,1080)
    // background("#000")
}

//set function of car to follow mouse with a background of BLUE
function draw () {
    background("blue")
    car(mouseX,mouseY)

    // circle(mosueX,mouseY,50)
}

//draw car and set it as a function
function car (x,y) {
    circle(x,y,100);
    strokeWeight(50);
    fill (5,240,26)
    circle(x+200,y,100);
    strokeWeight(50);
    // strokeColor(235, 52, 222)
    fill (5,240,26);
    rect (x-50,y-100, 300, 50);
    rect(x-50,y-150,200,40)
}