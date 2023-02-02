// takes a color as an argument ( you can use color(170, 200, 150) )
// sets the red component of that color to zero  ( colorVariableArgumentName.setRed(0) )
// Returns that new color without red
// Then, test this function by drawing a circle to the screen using the result. You might have something like:
// let noRed = removeRed( color(170, 200, 150) );

// fill(noRed);

// draw circle


//creates canvas for drawing
function setup() {
    createCanvas(600,800)
}

function draw () {
    let noRed = redRemover( color(170, 200, 150) ); //sets redRemover to remove red
    circle(300,600,201) //creates circle
    fill(noRed) //fills with the redRomver var
}

function redRemover(red) {
    red.setRed(0)//sets the red in the hex code to 0
    return red
}