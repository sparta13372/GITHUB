// Create a string array. List at least five of your favorite things in that array.
// Then, write a loop that writes to a div element each of them, with the string ", is one of my favorite things." after the thing. For instance, one line in the div might say, "Pizza, is one of my favorite things."


let favorDiv = document.getElementById("favor")
let i = 0 //sets i for loop
let x = ["burger", "retro", "zoe", "drogon", "modding"] //sets array


for(let i = 0; i<5;i++) { //loops 0-4
    //loops array based on placement
    favorDiv.innerHTML = x[0] + ",is my favorite thing!" + "<br/>"
    favorDiv.innerHTML += x[1] + ",is my favorite thing!"+ "<br/>"
    favorDiv.innerHTML += x[2] + ",is my favorite thing!"+ "<br/>"
    favorDiv.innerHTML += x[3] + ",is my favorite thing!"+ "<br/>"
    favorDiv.innerHTML += x[4] + ",is my favorite thing!"+ "<br/>"
    console.log(i)
}