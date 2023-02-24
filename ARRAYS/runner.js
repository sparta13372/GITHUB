// Create an array with 3 "best times" (numbers). Write the array so the times in order, from lowest to highest.

// Then, write the line of code that displays the runner-up times (second and third place) in two different divs.

//sets all divs in java
let oneDiv = document.getElementById("one")
let twoDiv = document.getElementById("two")
let threeDiv = document.getElementById("three")

//sets an array and displays numbers in order from lowest to highest
let runArray = [2.30,2.80,3.01]
runArray[0]
oneDiv.innerHTML = runArray[0]
runArray[1]
twoDiv.innerHTML = runArray[1]
runArray[2]
threeDiv.innerHTML = runArray[2]