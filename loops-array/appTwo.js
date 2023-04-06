// Create an application that:
// Takes input from a user using a simple text input field.
// Splits the string on spaces
// Loops through  the array looking for bad words in the array
// Adds 1 to a tally count when a bad word is found
// Outputs to the document
// If any bad words were found (found / not found)
// How many bad words, in total, were found
// Clears out the text field so the user can input a new string
var badWord = ""
var inputArray = []
var veryBad = ["clear", "water", "tires"]
var displayStuff = 0
const lookHere = document.getElementById("lookHere")

function badWordDetection () {
    inputArray = badWord.split(" ")
    console.log(inputArray)
    displayStuff = 0
    for(let i = 0; i < inputArray.length;i++) {
        for(let j = 0; j < veryBad.length;j++) {
            if(inputArray[i]==veryBad[j]) {
                displayStuff++
            }
        }
    }
     lookHere.innerHTML = displayStuff + " bad word's"
}

function clicky() {
    badWord = document.getElementById("badWord").value
    badWordDetection()
}

