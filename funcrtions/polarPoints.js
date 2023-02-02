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