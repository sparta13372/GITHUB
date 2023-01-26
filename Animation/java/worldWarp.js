//set value
let x = 0


//create canvas for ball
function setup () {
    createCanvas(800,600)
}

//draw circle that goes from one edge to another
function draw () {
    background("#000")
    circle(x,100,100)
    x = x + 5
    console.log(x)

    //reset position of circle
    if (x>800) {
        x = 0   
    }
}