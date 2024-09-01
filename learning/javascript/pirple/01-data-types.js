// Lesson 2 - Data Types
// 
// Lecture: Numbers and Strings
// 
// Number
console.log(10 * 5);
console.log(Math.PI);

// Strings
console.log("Hello");
console.log("Super".length);
console.log("Chris".charAt(4));
console.log("Hello" + " " + "World" + "!");
console.log("I want to be uppercase!!!".toUpperCase());

// Lecture: Booleans
// 
// the following evaluates to true
var hasContent = "qwerty";
var myArray = [];

// the following evaluates to false
var isZero = 0;
var isFalse = false;

// true
console.log(Boolean(hasContent));
console.log(Boolean(myArray));

// false
console.log(Boolean(isZero));
console.log(Boolean(isFalse));

// Lecture: Objects
// 
// Object 1
var myName = { 1: "Chris" };
console.log(myName);

// Object 2
var myObject = new Object();

myObject['1'] = "Chris";
myObject['2'] = "Sally";

console.log(myObject);

// Object 3
var myOtherObject = {
    1: "Chris",
    2: "Sally",
    3: "Bob",
    4: "Billy",
}
myOtherObject['unique value'] = "Ashley";

console.log(myOtherObject);

// Object 4
var anotherObject = {
    firstName: "Christ",
    lastName: "Smith",
    age: 50,
    numbers: {
        mobile: "555-1234",
        home: "555-5555",
    },
    address: "123 Fake St."
}
console.log(anotherObject);

// Object 5
var donut = {
    type: "coconut",
    glazed: true,
    sweetness: 8,
    hasChocolate: false,
    sayH: function() {
        console.log("Hi");
    },
    showSweetness: function() {
        console.log("Sweetness: " + this.sweetness + "/10");
    },
}

donut.sayH();
donut.showSweetness();

// JavaScipt function introduction
// 
// Constructor pattern for creating objects
function donutCost(type, glazed, sweetness, hasChocolate) {
    this.type = type;
    this.glazed = glazed;
    this.sweetness = sweetness;
    this.hasChocolate = hasChocolate;
    this.sayType = function() {
        console.log("Type: " + this.type);
    }
    this.showSweetness = function() {
        console.log("Sweetness: " + this.sweetness + "/10");
    }
}

var coconutDonut = new donutCost("coconut", false, 8, true);
console.log(coconutDonut);
coconutDonut.sayType();

var vanillaDonut = new donutCost("vanilla", true, 10, false);
console.log(vanillaDonut);

// Lecture: Arrays
// 
// Array 1
var myArray = [1,2,3,"Tom","Jerry", true];
console.log(myArray);
console.log(myArray.length);
console.log(myArray[5]);

// Array 2
var mySecArray = new Array();
mySecArray[0] = "John";
mySecArray[1] = "Cena";
console.log(mySecArray);

// Array 3
// more prefereable
var myThrdArray = ["John", "Cena", "James"];

// Add item
myThrdArray.push("Bond");

// Remove the last element "Bond"
myThrdArray.pop();

// Array 4
var myFrthArray = ["Red", "Green", "Blue",["Black","White"]]
console.log(myFrthArray);
console.log(myFrthArray[3]);

var sortedFrthArray = myFrthArray.sort()
console.log(sortedFrthArray);

var mySecFrthArray = ["Cyan", "Magenta", "Yellow", "K"]

var concattedArray = myFrthArray.concat(mySecFrthArray);
console.log(concattedArray);

var slicedArray = myFrthArray.slice(1, 2)
console.log(slicedArray);
