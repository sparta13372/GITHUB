// Take your ball bounce or world wrap assignment and recode it using an object to store the ball's size, color, and velocity. No global variables or hardcoded values should be used in your update function.

//set value
let ball = {
    y: 100,
    radius: 100
}

//sets x to have position
let x = 0


//create canvas for ball
function setup () {
    createCanvas(800,600)
}

//draw circle that goes from one edge to another
function draw () {
    background("#000")
    circle(x,ball.y,ball.radius)
    x = x + 5
    console.log(x)

    //reset position of circle
    if (x>800) {
        x = 0   
    }
}