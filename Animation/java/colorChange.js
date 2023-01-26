//This is the plan for the animation
//1. create canvas
//2. create circle, give simple design
//3. make circle follow the mouse
//4. use an IF statement to change the color of the circle based on poisition


function setup() {
  createCanvas(400, 400);
  
}

function draw(){
  background(0,0,0,20)
  circleo(mouseX,mouseY)
}

function circleo(x,y) {
    if(x>200) {
        fill(245, 66, 66) 
    } else {
        fill(10,50,100)
    }

  noStroke()
    //fill(250,250,100)
  circle(x,y,50)
  
  
  
}


// function setup () {
//   createCanvas(400,400)
  
// }

// function draw () {
//   console.log("mark!")
// }