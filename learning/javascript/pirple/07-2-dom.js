// Lecture: The Query Selector
const notGreen = document.querySelector(".not-green");

// Lecture: Traversing the DOM
notGreen.style.backgroundColor = "aqua";

const testBlue = document.getElementById("blue");
console.log(testBlue.childNodes[1]);

// Lecture: IDs and Classes

// example 1
const realFoot = document.getElementById("foot");
const footID = realFoot.id;
const replacementID = "bottom";
realFoot.id = replacementID;
console.log(realFoot); // change ID

// example 2
const ft = document.getElementsByTagName("footer");
const footer = ft[ft.length - 1];
footer.id = "feeter";
console.log(footer);

// example 3
const purple = document.querySelector(".purple");
purple.style.backgroundColor = "purple";
purple.style.height = "100px";
purple.style.width = "100px";

// Lecture: Elements
const createdDiv = document.getElementById("created");
const newElement = document.createElement("P");
newElement.innerText = "I was created by COMSCI!";
newElement.className.add("purple");

createdDiv.appendChild(newElement);