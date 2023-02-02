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