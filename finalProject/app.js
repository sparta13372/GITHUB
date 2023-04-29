
class Bullet { //bulet construct
    constructor(x) {
        this.x = x
        this.y = 520
    }
}

let x = 40
let y = 0
var vel = 3
var pVel = 0
var playerX = 300
var playerAlive = true
var score = 0
let bullets = [

]
let enemies = [ //enemy aray for poisition
    {x: 0, y: 100, isAlive: true}, 
    {x: 0, y: 200, isAlive: true},
    {x: 0, y: 300, isAlive: true},
    {x: 100, y: 100, isAlive: true},
    {x: 100, y: 200, isAlive: true},
    {x: 100, y: 300, isAlive: true},
    {x: 200, y: 100, isAlive: true},
    {x: 200, y: 200, isAlive: true},
    {x: 200, y: 300, isAlive: true},
    {x: 300, y: 100, isAlive: true},
    {x: 300, y: 200, isAlive: true},
    {x: 300, y: 300, isAlive: true},
    {x: 400, y: 100, isAlive: true},
    {x: 400, y: 200, isAlive: true},
    {x: 400, y: 300, isAlive: true},
]

function setup () { //size and frame rate of animation
    createCanvas(800,600)
    frameRate(60);
}

function preload(){ //sprite work
  img1 =loadImage("img/alien .png")
  img2 =loadImage("img/hero.png")
  img3 =loadImage("img/youLose!.png")
  img4 =loadImage("img/youWin.png") 
}


function playerCollision () { //you lose condition
    enemies.forEach(enemy=>{
        if(y+enemy.y >= 450) {
            if(enemy.isAlive) {
               image(img3, 85, 120, 700, 300) 
               playerAlive = false
            }
        }
    })

}

function draw () {
    background("#1f0336")
    fill("yellow")
    textSize(32);
    text("score:" + score, 15 , 30) //score
    
    enemies.forEach(enemy=>{
        if(enemy.isAlive) {
          image(img1, x+enemy.x, y+enemy.y,55,55)  
        }
    })

    if(playerAlive) {
        image(img2, playerX, 500, 150, 50)
    } //is the player alive?

    x = x + vel
    
    bullets.forEach(bulletFunction)

    if (x>340 || x<40) {
        vel *= -1
        y += 8
    } //moving enemies back and forth and slowly donw the screen
    
    playerX += pVel

    playerCollision() //calling collision
    
    if(score == 1500) {
        image(img4, 85, 120, 700, 300)
    } //you win condition
}

function bulletFunction(bullet,index,arr) {
        bullet.y-=4
        fill("#32a852")
        circle(bullet.x,bullet.y,20)
        if(bullet.y < 0) {
            delete arr[index]
        }
        for(let i = 0; i < enemies.length; i++) {
            if((bullet.y < y+enemies[i].y + 55) && (bullet.y > y+enemies[i].y) && (bullet.x < x+enemies[i].x + 55) && (bullet.x > x+enemies[i].x)) {
            
            if(enemies[i].isAlive) {
                delete arr[index]
                enemies[i].isAlive = false 
                score = 100 + score
            }
        }
        }
} //bullets, this one was hard

function keyPressed () { //polayer movement and shooting
    if(keyCode === RIGHT_ARROW) {
        pVel = 5 
    } else if(keyCode === LEFT_ARROW) {
        pVel = -5
    }
    
    if(key === ' ') {
        let newBullet = new Bullet (playerX + 74)
        bullets.push(newBullet)
        // console.log("wow")
    }
}

function keyReleased () {
    if(keyCode === RIGHT_ARROW) {
        pVel = 0
    } else if(keyCode === LEFT_ARROW) {
        pVel = 0
    }
}





