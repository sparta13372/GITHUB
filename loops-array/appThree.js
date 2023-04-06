// Given the array
// let objects = [
//  { color: "#FF0000", height: 100, width: 300 },
//  { color: "#FFFF00", height: 200, width: 200 },
//  { color: "#ff0000", height: 300, width: 100 },
// ];
// Write a loop that creates three divs based on the data in the array. You should only have one document.createElement in your code.

let objects = [
 { color: "#FF0000", height: 100, width: 300 },
 { color: "#FFFF00", height: 200, width: 200 },
 { color: "#ff0000", height: 300, width: 100 },
];

for(let i = 0; i < objects.length;i++) {
    var stuffCool = document.createElement("div")
    // colors.innerHTML = i
    stuffCool.style.backgroundColor = objects[i].color
    stuffCool.style.height = objects[i].height + "px"
    stuffCool.style.width = objects[i].width + "px"
    console.log(stuffCool)
    document.getElementById("container").appendChild(stuffCool)
}