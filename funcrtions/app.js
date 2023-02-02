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