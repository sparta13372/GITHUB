//set value
let x = 0

//create canvas, dont know if neccesary for this
function setup () {
    createCanvas(400,400)
}

//use console.log to increae value on draw
function draw () {
    x = x + 1
    console.log(x)
}