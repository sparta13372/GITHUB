let rectangleLeft = {
    width: 50,
    height: 200,
    x:50,
    y:300,
}

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
     if (keyIsDown(UP_ARROW)) {
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
    rect(rectangleLeft.x,rectangleLeft.y,rectangleLeft.width,rectangleLeft.height)
    rect(rectangleRight.x,rectangleRight.y,rectangleRight.width,rectangleRight.height)
}
