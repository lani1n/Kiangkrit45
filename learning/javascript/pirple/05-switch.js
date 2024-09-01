// Lesson 6 - Switch Statements
// 
// Lecture: Switch Statements
// 
// Switch statement
/*
    switch (expression) {
        case value 1:
            statement to be executed
            break;
        case value 2:
            ...
            break;
        default
            break;
    }
*/

// if expression
const myFruit = "apple";
if (myFruit === "apple") {
    console.log("I love apples.")
} else if (myFruit === "orange") {
    console.log("Orages are cool.")
} else if (myFruit === "pear") {
    console.log("Pears are also good.")
} else {
    console.log("That sound pretty.")
}

// switch
const myFruit1 = "dragon's fruit"
switch(myFruit1) {
    case "apple":
        console.log("I love apple");
        break;
    case "orange":
        console.log("Noice");
        break;
    case "banana":
        console.log("Monke loves banana")
        break;
    // without default nothing returns
    default:
        console.log("XD")
        break;
}

// without break statement
// it keeps running 
const myFruit2 = "orange"
switch(myFruit2) {
    case "apple":
        console.log("I love apple");
    case "orange":
        console.log("I like orange"); // prints
    case "banana":
        console.log("Banana is good too") // prints
    default:
        console.log("Okay") // prints
}

// inside the function
function fruitLogger(myFruit3) {
    switch(myFruit3) {
        case "apple":
            console.log("Manzana");
            break;
        case "orange":
            console.log("Naranja");
            return;
        case "banana":
            console.log("Platano")
            break;
        default:
            console.log("Bueno")
            break;
    }
    console.log("Out of switch statement");
    // this will not print
    // case orange use return keyword
}
fruitLogger("orange");

function fruitLogger1(myFruit4) {
    switch(myFruit4) {
        // apple, orange, banana
        // have same output
        case "apple":
        case "orange":
        case "banana":
            console.log("I love them all the same");
            return;
        default:
            console.log("Bueno")
            break;
    }
    console.log("B r u h")
}
fruitLogger1("orange");

// example for number rather than string
function numChecker(num) {
    let value;
    switch(num) {
        case 0:
        case 1:
        case 2:
            value = "low range";
            break;
        case 3:
        case 4:
        case 5:
            value = "mid range";
            break;
        case 6:
        case 7:
        case 8:
        case 9:
            value = "high range";
            break;
        default:
            value = "Input number between 0-9";
            console.log(value);
            return;
    }
    setVolume(value);
}
function setVolume(n) {
    console.log("volume set at " + n);
    return;
}
numChecker(1);
numChecker(4);
numChecker("string");

// more example
const donutPicker = (flavor) => {
    switch(flavor) {
        case 's':
            return "sprinkles";
        case 'c':
            return "chocolate glazed";
        case 'b':
            return "beer claw";
        default:
            return null;
    }
}
const donut = (selection) => {
    const selectedDonut = donutPicker(selection);
    if (!selectedDonut) {
        console.log("Incorrect selection")
    }
    else { console.log("You have selected " + selectedDonut);}
}
donut('s');
donut('c');
donut('b');
donut();