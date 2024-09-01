// Lecture: Introduction to Events

/*
Events
    - Any event taking place in the DOM
    - Can be user-generated or by an API
    - many types of events
    - event contains properties and methods
        - addEvenyListener function takes in the event
        to listen for, anda second argument to be called
        whenever the described even fires.
            - addEventListener("click", function() {
                logic inside function
            })
*/

const clickDiv = document.getElementById("clicky");
const clickableButton = clickDiv.querySelector("button");
const logEvent = (eV) => {
    clickableButton.innerText = "Do Not Click!";
    console.log(eV.type);

    if (eV.type === "click") {
        console.log("Click");
    }
    if (eV.type === "focus") {
        console.log("Focus");
    }
    else {
        return false;
    }
}
clickableButton.addEventListener("click", logEvent);
clickableButton.addEventListener("focus", logEvent);
clickableButton.addEventListener("focusout", logEvent);

// change color as cliking
const bckgrnd = document.getElementById("background");
const switchBackground = (eL) => {
    if (eL.which === 1) {
        bckgrnd.classList.toggle("background-color");
    }
}
bckgrnd.addEventListener("mousedown", switchBackground);

// Lecture: Preventing Default

const div2 = document.getElementById("div2");
const myLink = div2.querySelector("a");

myLink.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Not today!");
});

const myForm = document.getElementById("myForm");
const addToList = (x) => {
    x.preventDefault();
    const myInput = document.getElementById("myInput").value;
    const newLI = document.createElement("li");
    newLI.innerText = myInput;
    myForm.reset();
    console.log(newLI);
}
myForm.addEventListener("submit", addToList);

// Lecture: Key Events

// document.addEventListener("keydown", function(e) {
//     // console.log(e.keyCode);
//     if (e.keyCode === 32) {
//         e.preventDefault()
//     }
// });

// document.addEventListener("keyup", function(e) {
//     console.log(e.keyCode);
// })

const div3 = document.getElementById("div3");
const para = div3.querySelector("p");
const textArea = div3.querySelector("textarea");
const paraText = "User is typing";
let timer;
const removeText = (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        para.innerText = "";
    }, 1000)
};
const addText = (e) => {
    para.innerText = paraText;
}
textArea.addEventListener("keydown", addText);
textArea.addEventListener("keyup", removeText);