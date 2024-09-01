/*
https://www.udemy.com/course/programming-in-javascript/learn/lecture/1723400#overview
Programming in JavaScript
*/

/*
Section 2: Objects & Arrays
*/

// 25 What are objects?

// unordered collection of properties
const car = {
    color: "red",
    model: "Gallardo",
    brand: "Lamborghini"
}
console.log(car);
console.log(car.color); // red

// alternative way to create an object
const blank = new Object();
console.log(blank); // {}

// add property to object
blank.type = "space"
console.log(blank.type);

console.log(blank);

// 26 Object properties

const circle = {};

circle.radius = 4;
circle["diameter"] = 8;

console.log(circle);
console.log(circle.radius);
console.log(circle["diameter"]);

// example 2
const book = {
    title: "A Tale of Two Cities",
    author: "Charles Dickens"
}

for (let i in book) {
    console.log(i);
    console.log(i + ": " + book[i]);
}

// 27 JSON - JavaScript Object Notation

const myBook = {
    "title": "A Tale of Two Cities",
    "author": "Charles Dickens",
    "price": 29
}
console.log(myBook);

// 28 The global object

var globalS = 12;
function globalF() {
    var globalS = 15;
    console.log(globalS);
}
var globalS = 18;
globalF();

// 29 Arrays in JavaScript

const myArr = [];

myArr[0] = "zero";
myArr[1] = "one";
myArr[2] = "two";
console.log(myArr);

// 30 Sparse Arrays

myArr[5] = "five";
console.log(myArr);
// index three and index four are empty

myArr[3] = "three";
myArr[4] = "four";
console.log(myArr);

// 31 Arrays as Objects

console.log(typeof myArr); // object

// both true
console.log(myArr instanceof Object);
console.log(myArr instanceof Array);

myArr["5"] = "5";
console.log(myArr);

// 32 Length of an Array

const oneAndTwo = [1, 2];
console.log(oneAndTwo.length);

oneAndTwo[12] = "oneAndTwo";
console.log(oneAndTwo); // actually has three items
console.log(oneAndTwo.length); // 13

oneAndTwo.length = 2; // shrink/wrap to first two items
console.log(oneAndTwo);
console.log(oneAndTwo.length);

// 33 Iterating over an Array

const arrayOfMine = ["one1", "two2", "three3"]
arrayOfMine[5] = "six6";

for(let i = 0; i < arrayOfMine.length; i++) {
    console.log(arrayOfMine[i]);
}

for(let i in arrayOfMine) {
    console.log(i);
}

// 34 Deleting elements of an Array

const myArray = [1, 2, 3, 4, 5];
delete myArray[4];

console.log(myArray);

// 35 Methods in an Array

const methodArr1 = [1, 2, 3, 4, 5];
const methodArr2 = [6, 7, 8, 9, 10];
const methodArr3 = [11, 12, 13]

// concat
const concatMine1 = methodArr1.concat(methodArr2);
console.log(concatMine1);

const concatMine2 = concatMine1.concat(methodArr3);
console.log(concatMine2);

// join
// methodArr 1 = [1, 2, 3, 4, 5];
console.log(methodArr1.join()); // 1,2,3,4,5
console.log(methodArr1.join("/"));

// push
methodArr3.push(14); // add 14 to the last
// methodArr3 = [11, 12, 13]
console.log(methodArr3);

// unshift
methodArr1.unshift(0); // add 0 to the first
// methodArr 1 = [1, 2, 3, 4, 5];
console.log(methodArr1);

// pop
methodArr3.pop();
// from methodArr3.push(14)
// methodArr3 = [11, 12, 13, 14]
console.log(methodArr3);

// shift
methodArr1.shift();
// from methodArr1.unshift(0);
// methodArr 1 = [1, 2, 3, 4, 5];
console.log(methodArr1);

// slice
const methodArr4 = [1, 3, 5, 7, 9, 11];
console.log(methodArr4.slice(1)); // 3, 5, 7, 9, 11
console.log(methodArr4.slice(1, 4)); // 3, 5, 7

// splice
const methodArr5 = ["a1", "b2", "c3", "d4", "e5"];
methodArr5.splice(2); // a1, b2
console.log(methodArr5);

// 36 Sorting Arrays

const ArrayMe = [54, 321, 69, 91, 82];
console.log(ArrayMe.sort());

// ascending order
const num_ascend = (a, b) => {
    return (a - b)
}
console.log(ArrayMe.sort(num_ascend));

// descending order
const num_descend = (a, b) => {
    return (b - a)
}
console.log(ArrayMe.sort(num_descend));