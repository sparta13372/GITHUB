// In addition to your setup() and draw() calls, add a new function named polarPoint()
// Add one argument to polar point (r)
// In the polar point function, create an x variable and set it to r * Math.sin(mouseX);
// Create a Y variable, set it to the result of r * Math.cos(mouseX);
// Finally, at the end of the function, write return createVector(x,y); 
// To test this function:

// Set a variable (perhaps res) equal to the result of calling polarPoint() in your draw call
// Add a translate(100,100); line before your drawing methods
// Draw a circle at res.x, res.y, and with a radius of 10.

//create canvas for drawing
function setup () {
    createCanvas(1920,1080)
}

function draw () {
    var res = polarPoint(20) //set a res variable for the polar point
    translate(100,100); //sets position
    circle(res.x,res.y,10) //creates circle around res variable
}

function polarPoint (r) {
    let x = r * Math.sin(mouseX); //uses math for the x poistion
    let y = r * Math.cos(mouseX); // uses math for the y poistion
    return createVector(x,y); //returns a vector on the x and y poistion
}