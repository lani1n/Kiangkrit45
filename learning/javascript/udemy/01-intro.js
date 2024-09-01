/*
https://www.udemy.com/course/programming-in-javascript/learn/lecture/1723400#overview
Programming in JavaScript
*/

/*
Section 1: Introduction to JavaScript
*/

// 1 Introduction

/*
JavaScript is the language of the web
*/

// 2 "Hello World" with JavaScript

// 3 Little History

// 4 Variables

var message = "Hello World";
console.log(message);

// 5 REPL

/*
REPL
Read Eval Print Loop
*/

// 6 Data Types

/*
JavaScript data types

    primitve - numbers / string / boolean
    object - objects / function
    null 
    undefined -> absense of value
*/

var a = 6;
console.log(typeof a);

var b; // just declare
console.log(b); // undefined

// 7 Flavor of JavaScript

var d = 4;
var e = "e";
var f = false;

// 8 The String data type

var g = 'good morning';
// either single or double
var h = "good afternoon";
var i = "it\'s me"
console.log(g);
console.log(h);
console.log(i);

// 9 The Number data type

var j = 4; 
var k = 12.34;
var l = -15;
console.log(j)
console.log(k)
console.log(l)

// 10 The Boolean data type

var m = true;

// false case
var n;
var o = "";
var p = undefined;
var q = null;

if (n != true & o != true & p != true & q != true) {
    console.log("all false"); // above treat as false value
}

// 11 Comments 

// 12 Operators

var r = 10 + 10; // add
var s = 10 - 10; // minus
var t = 10 * 10; // multiply
var u = 10 / 10; // divide
console.log(r);
console.log(s);
console.log(t);
console.log(u);

/*
conditional operator 
*/
if (r > s) { // greater
    console.log(true); 
} else { 
    console.log(false); }
if (s >= t) { // greater equal to
    console.log(true); 
} else { 
    console.log(false); }
if (t < u) { // lesser
    console.log(true); 
} else { 
    console.log(false); }
if (u <= r) { // lesser equal to
    console.log(true); 
} else { 
    console.log(false); }

// 13 Expressions

// 14 If-Else statement

// if ( logic exprssion ) {
//     code to be executed
// } 

function is_leap_year (year) {
    if (yaer % 400 == 0) {
        return true;
    } else if ((year % 4 == 0) && (year % 100 != 0)) {
        return true;
    } else { return false; }
}

// 15 Switch statement

// switch ( expression ) {
//     case 1: statement
//         break;
//     case 2: statement
//         break;
//     default 1: statement
// }
function day_of_week(day) {
    switch(day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day of week");
    }
}
day_of_week(1);
day_of_week(3);
day_of_week(5);
day_of_week(7);

// 16 While loop

// while (expression) {
//     statement
// }
let v = 1;
while (v <= 10) {
    console.log(v);
    v++; // increment
}

// 17 For loop

// for ( let i = 0; i <= 100; i++ ) {
//     console.log(i)
// }
for (let w = 1; w <= 10; w++) {
    console.log(w);
}
// 18 break and continue
for (let x = 1; x <= 10; x++) {
    if (x == 8) {
        continue 
    }
    console.log(x);
}

for (let y = 1; y <= 10; y++) {
    if (y == 5) {
        break // stop suddenly
    }
    console.log(y);
}

// 19 functions

function y() {
    console.log("y");
}
y();

// 20 Variable scope

function z() {
    if (true) {
        let z = 5;
    } else {
    } console.log(z);
}
console.log(z());

// 21 Type Conversion

console.log(4 + 6); // 10
console.log(4 + "6"); // 46
console.log("4" + "6"); // 46

// 22 JavaScript in a web page

{/*
<head>
    <script>
        alert("Hello World")
    </script>
</head>

<body>
    <script src="test.js">
        console.log("Hi humans")
    </script>
</body>
*/}

// 23 Using external JavaScript files

