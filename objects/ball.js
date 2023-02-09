//set value
let ball = {
    y: 100,
    radius: 100
}

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