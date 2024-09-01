// Lesson 3 - Variables and Constants
// 
// Lecture: Variables
//
var myName2 = "Jean";

// Case sensitive
console.log(myName2); 
// console.log(MYName2) prints error
// console.log(mYnAmE2) also prints error

console.log(typeof myName2);

var myFavNum = 13;
console.log(myFavNum);
console.log(typeof myFavNum);

function sayHi() {
    console.log("Hi" + " " + myName2)
}
sayHi()

var count = 1;
function increase() {
    count += 1;
    console.log(count)
}
increase();
increase(); // stacks 
increase(); // stacks second time

var amINull = null;
console.log(amINull);

// Lecture: Let and Const
//
// 1 
function SAYhi() {
    var shouldSayHi = true;
    if (shouldSayHi === true) {
        var myName3 = "Tony";
        console.log("Hi!" + " " + myName3);
    }
}
SAYhi();

// 2 
function sayHello() {
    var shouldSayHello = true;
    var reallySayHello = true;
    if (shouldSayHello === true) {
        var MYname = "Peter";
        if (reallySayHello === true) {
            var MYlastName = "Parking";
        }
    }
    // re-declare
    MYlastName = "Parker";
    console.log("Hello" + " " + MYname + " " + MYlastName)
}
sayHello();

// 3
function sayBye() {
    var shouldSayBye = true;
    var reallySayBye = true;
    if (shouldSayBye === true) {
        // let more strict than var
        let MYname = "Peter";
        console.log("Good Bye" + " " + MYname)
    }
    // use 
    // console.log("Good Bye" + " " + MYname)
    // here will crash
}
sayBye();

// 4
function sayBYE() {
    let shouldSayBye = true;
    let reallySayBye = true;
    let MYname;
    if (shouldSayBye === true) {
        MYname = "Peter";
        console.log("Bye" + " " + MYname)
    }
    else {
        MYname = "Tony";
        console.log("Bye" + " " + MYname)
    }
}
sayBYE();

// const 
// 5 
const myName5 = "Michael";
/*
redeclare like

myName5 = "Scoffield";

prints error
*/
console.log(myName5);

// 6 
const myObject1 = {
    name: "Leon"
}
console.log(myObject1);

// to reassign without causing error
myObject1.name = "Ethan"
console.log(myObject1);

// 7
function SAYHI7() {
    const myName7 = "Jane";
    if (true) {
        const myName7 = "James";
        console.log(myName7);
    }
    console.log(myName7)
}
SAYHI7();