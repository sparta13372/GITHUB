// Takes in a list of comma-separated numbers from the user
// Splits that list into an array of numbers
// Converts the string version of the numbers into number versions
// Loops through the array and sums up the values
// Calculates the average of the array
// Displays to the user
// The average
// The sum
// Removes the text from the input so the user can type in new numbers
// let mathTime = document.getElementById("mathTime")
const stuff = document.getElementById("stuff")
const sDiv = document.getElementById("sDiv")
// let something = [x,y,z,a,b,c]
// let first = [x,y,z] 
// let second = [a,b,c]

//array that acts as our values for number
function chickenFeet() {
    let mathTime = document.getElementById("mathTime").value
    // console.log(mathTime)
    // console.log(mathTime.value); 
    let splitTime = mathTime.split(",");
    // console.log(splitTime)
    let i = 0
    let sum = 0
    let myArray = (splitTime)
    while(i < myArray.length) {
        let num = Number(myArray[i])
        // let itemAtIndex = myArray[i];
        sum += num;
        i++

        average = sum/myArray.length

    }
    console.log(sum)
    console.log(average)

    sDiv.innerHTML = "sum: "+ sum + " average: " + average
}

//input that takes the average and displays it



//display the sum as well

