// Lesson 4 - If Statements and Operators
// 
// Lecture: If Statements Introduction
// 
// If statement tells the code if true, run more
// 
// if (expression) {
// statements to be executed
// }

let shouldSayHello2 = true;

if (shouldSayHello2 === true) {
    console.log('Hi There!')
}

let shouldSayHello3 = false;

if (shouldSayHello3 === true) {
    console.log('Hey There!')
}

// Lecture: Comparison Operators
// 
// 1
const numberSeven = 7;
console.log(typeof numberSeven);

const stringSeven = "7";
console.log(typeof stringSeven);

// equal to and same data type
console.log(numberSeven === stringSeven);
// false

// equal to but not compare data type
console.log(numberSeven == stringSeven)
// true
// JavaScript converts number to string

// 2
const numberNine = 9;
const stringNine = "9";
console.log(numberNine + stringNine);
// 99
// JS converted 9 to "9"

// 3
// change date type
const NineCon = parseInt(stringNine);
console.log(numberNine + NineCon);

// 4
if (numberNine === stringNine) {
    console.log("equals")
}
else {
    console.log("equals but different type")
}

// 5
const myArray2 = [1,2,3];
const myArray3 = [1,2,3];
// false
console.log(myArray2 == myArray3);
// false
console.log(myArray2 === myArray3);

const myArray4 = myArray2;
// true
console.log(myArray2 == myArray4);
// true
console.log(myArray2 === myArray4);

// 6
const BankBalance = 100;
const costOfitem = 70;
const tax = 0.07;
if (BankBalance > costOfitem + (costOfitem * tax)) {
    console.log("You can purchase this item")
}
else {
    console.log("You cannot purchase this item")
}

// Lecture: Nested If Statements
// 
// 1
if (BankBalance > costOfitem + (costOfitem * tax)) {
    console.log("You can purchase this item")
    // nested inside
    if (tax >= 0.07) {
        console.log("tax is not too high")
    }
}

// Lecture: Logical Operators
//
// 1
const BankAccount = 1000;
const Payment = 500;
const canSpend = true;
if (BankAccount >= Payment && canSpend === true) {
    console.log("Payment successful")
}

// x && x - and both true
// x || x - or either true

const Payment2 = 1500;
const HasCredit = true;
// 
if (BankAccount >= Payment2 || HasCredit === true) {
    console.log("Payment with Credit Card succesful")
}

let myName6; // undefined

console.log(!myName6);
// roughly like
// is myName6 not or undefined
// true