// Learn JavaScript. Quick Course for Beginners
// https://www.bitdegree.org/user/course/javascript-learn-javascript-quick-course-beginners

// Quick Introduction to JavaScript
// Introduction to coding

{/* <html>
    <head>
        <title></title>
    </head>
    <body>
        <script src="script.js"></script>
    </body>
</html> */}

// Variables hold Data

console.log("hello"); // return in console

const player = "Laurence Svekis"
console.log(player);

let score = 0;
score = 100; // update value
console.log(score);

let test = "test"
let TEST = "TEST"
console.log(test); // case sensitive
console.log(TEST);

// Data types

let mark = "100"
mark = mark + 1
console.log(mark); // string "100" + "1" -> 1001

let point = 100
point = point + 1
console.log(point); // number 100 + 1 -> 101

// Arrays and Objects

const dice = [1,2,3,4,5,6];
console.log(dice);
console.log(dice[0]); // first
console.log(dice[1]); // second

dice.push(7); // adding
console.log(dice);

dice.pop() // remove last
console.log(dice);

dice.shift() // remove first
console.log(dice);

dice.unshift(1) // add first
console.log(dice);

const myObj = {
    "name": "Laura Sauvra",
    "net": 200,
    "job": "salesman"    
}
console.log(myObj);

myObj.job = "doctor"; // update
console.log(myObj);

// JavaScript Functions

// 1
function myFunc() {
    console.log("function declaration");
}
myFunc();

// 2
const myFunc2 = function(num) {
    console.log("function expression is " + num);
}
myFunc2(100);

// Conditions If statements

let tbool = true; // boolean data type
let fbool = false;
console.log(tbool);
console.log(fbool);

if (1 > 2) {
    console.log("1 is greater than 2");
} 
// check again
else if (1 == 2) {
    console.log("1 is equal to 2");
}
else {
    console.log("1 is less than 2");
}

let message = (5 == 5) ? "true" : "false";
console.log(message);

function rollDice(num1, num2) {
    let res;
    if (num1 > num2) {
        res = "Number 1 Wins";
    } else if (num1 == num2) {
        res = "Draw";
    } else {
        res = "Number 2 Wins";
    }
    return res;
}
console.log(rollDice(1, 23));
console.log(rollDice(74, 16));
console.log(rollDice(47, 47));

// JavaScript Math Object

console.log(Math.random());

console.log(Math.random() * 10);

let aMath = randomNum(5);
let bMath = randomNum(6);

function randomNum(val) {
    return Math.floor(Math.random() * val) + 1;
}
randomNum(2);

// Loops For and While

let count = 10;
let x = 0;

while (x < count) {
    x++;
    console.log("Counter is " + x);
}