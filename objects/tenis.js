// Create two objects with properties for the x, y, width, and height for a 'tall' rectangle. Set their 'x' properties so that when drawn, one will appear on the left side of the composition, and the other on the right side.
// In the draw function,
// draw both of the rectangles in the objects to the screen, based on their properties
// if the up key is pressed, make the first object move up, and the second object move down
// if the down key is pressed, make the first object move down, and the other object move up     


//create object paddle for the left
let rectangleLeft = {
    width: 50,
    height: 200,
    x:50,
    y:300,
}

//create object paddle for the right
let rectangleRight = {
    width: 50,
    height: 200,
    x:1000,
    y:300,
}

function setup () {
    createCanvas(1920,1080)
}

function draw () {
    background("#f00")
     if (keyIsDown(UP_ARROW)) {  //creates if statement to set the up key to change the position of the paddles
        rectangleLeft.y = rectangleLeft.y + 10
        rectangleRight.y = rectangleRight.y - 10
    // rect(rectangleLeft.x,rectangleLeft.y+300,rectangleLeft.width,rectangleLeft.height)
    // rect(rectangleRight.x,rectangleRight.y-300,rectangleRight.width,rectangleRight.height)
    if (keyIsDown(UP_ARROW)==false && keyIsDown(DOWN_AAROW)==false) {
    // rect(rectangleLeft.x,rectangleLeft.y,rectangleLeft.width,rectangleLeft.height)
    // rect(rectangleRight.x,rectangleRight.y,rectangleRight.width,rectangleRight.height)
    }   
    }
      if (keyIsDown(DOWN_ARROW)) {
        rectangleLeft.y = rectangleLeft.y - 10
        rectangleRight.y = rectangleRight.y + 10

    // rect(rectangleRight.x,rectangleRight.y+300,rectangleRight.width,rectangleRight.height)
    // rect(rectangleLeft.x,rectangleLeft.y-300,rectangleLeft.width,rectangleLeft.height)
    }  

    //creates paddles
    rect(rectangleLeft.x,rectangleLeft.y,rectangleLeft.width,rectangleLeft.height)
    rect(rectangleRight.x,rectangleRight.y,rectangleRight.width,rectangleRight.height)
}
