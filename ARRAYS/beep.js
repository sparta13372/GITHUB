// Write a loop that runs 25 times and writes the iterand (current iteration of the loop) out onto the page inside of a div element.
// When the iterand is divisible by 3, write the word "beep" instead
// When the iterand is divisible by 5, write the word "bop" instead
// When the iterand is divisible by 3 AND 5, write "beepbop" instead


let sDiv = document.getElementById("s") //sets div to s

// gives div size and shape
sDiv.style.width = "400px"
sDiv.style.height = "400px"
// sDiv.style.backgroundColor = "#000ff0"

// sets s to a starting number
    let s = 1
    while(s<26){
        console.log(s)
        s++;
        sDiv.innerHTML += s //loops s through all numbers plus 1
        if(s % 3==0) { //sees if number generated is divisible by 3
            console.log(s)
            sDiv.innerHTML += "beep" + "<br/>" //says beep if true
        }
        if(s % 5==0) { //sees if number generated is divisible by 5
            console.log(s)
            sDiv.innerHTML += "bop" + "<br/>" //says bop if true
        }
        if(s % 3 && 5==0) { //sees if number generated is divisible by 3 and 5
            console.log(s) 
            sDiv.innerHTML += "beepbop" + "<br/>" //says beepbop if true
        }

    }
