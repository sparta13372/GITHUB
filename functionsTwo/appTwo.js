// Create an application that with an input and a button. When the user clicks on the button, update a div on the page to tell the user if what the user typed into the input is divisible by 7 or not. Use a separate function from the onclick function to discern if it is divisible. This function should return either true if it is divisible  or false if it is not.

let userNumber = document.getElementById("userNumber")
// let output = document.getElementById("output")

function seven(i) {
    // let i = Number(userNumber.value)
    let result = i % 7;

    if(result == 0){ 
        return true;
    }

    return false;
}

// console.log(seven(7))

function clickA() {
    let i = Number(userNumber.value)

    output.innerHTML = seven(i)

    console.log(seven(i))
}