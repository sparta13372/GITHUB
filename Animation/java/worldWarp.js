let x = 0

function setup () {
    createCanvas(800,600)
}

function draw () {
    background("#000")
    circle(x,100,100)
    x = x + 5
    console.log(x)
    if (x>800) {
        x = 0   
    }
}