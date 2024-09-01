// Lesson 7 - Loops
// 
// Lecture: While and Do While Loops
// 
// Loops
// Quick and easy way to do something repeatedly
/*
    Many types of loops but all do basically the same thing:
    repeat something (i.e. an action) a set number of times
    (could even be 0).
*/

// While loop
/*
    while(condition) {
        statement
    }
*/

// example 1
let numberOfLoops = 0;
while (numberOfLoops <= 5) {
    console.log("looping!");
    console.log(numberOfLoops);
    // without increment causes infinite loop
    numberOfLoops++;
}

// example 2
let num1 = 0;
let num2 = 0;

while (num1 < 10) {
    num1++;
    num2 += num1;
}
console.log(num2); // 55

while (num1 < 100) {
    num1++;
    num2 += num1;
    // without returns 5050
    if (num1 === 50) {
        break;
    }
}
console.log(num2); // 1275

// example 3
const names = ["Chris", "Bob", "Joe"];
let index = 0;
while (true) {
    // it's possible to loop until certain element in array is found
    // without knowing the index numbers nor number of elements in array
    if ((names)[index] === "Joe") {
        console.log(names[index])
        break;
    }
    index++;
}

// example 3 in alternative way
const nameLooper = (arr, userName) => {
    let index = 0;
    while (index < arr.length) {
        if (arr[index] === userName) {
            console.log(arr[index]);
            break;
        }
        index++;
    }
}
nameLooper(names, "Joe");

// do ... while statement
 
/*
    do {
        statement
    } while (condition)
*/
// the code always executes at least once
// before the condition is checked 

// example 1
let shouldRunOnce = true;
index = 0;
do {
    console.log("Looping");
    index++;
    // Looping is called 5 times
    if (index === 5) {
        shouldRunOnce = false;
    }
} while (shouldRunOnce);

// example 2
let totalMoney = 100;

do {
    ifCanPurchase();
} while (totalMoney > 500);

function ifCanPurchase() {
    if (totalMoney > 500) {
        console.log("Can purchase");
    } else {
        console.log("Cannot purchase");
    }
}
// if this was while loop the code will not run
// the initial value of totalMoney < 500 not > 500
// it will exit the loop

// Lecture: For Loops
//
// repeat until a specifies conditions
// evaluates to false
/*
    for(initial expression; condition; increment) {
        statement
    }
*/

// example 1
const iceCreams = ["vanilla", "caramel", "chocolate", "strawberry"];

for (let i = 0; i < iceCreams.length; i++) {
    console.log(iceCreams[i]);
}

// example 2
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        continue;
    }
    else if (i % 5 === 0) {
        continue;
    }
    else if (i % 3 === 0) {
        continue;
    }
    else {
        console.log(i);
    }
}
// those have 3, 5 and 15 as their divisions
// are skipped

// example 3
let x = 0;
while (x < 10) {
    x++;
    if (x === 5) {
        console.log("skipped")
        continue;
    }
    console.log(x + " is not skipped.");
}

// example 4
console.log("Starting loop!");

outerLoop:
for (let i = 0; i < 5; i++) {
    console.log("Loop #" + i);
    innerLoop:
    for (let a = 0; a < 5; a++) {
        console.log("Inner loop #" + i);
        if (a === 2) {
            break innerLoop;
        }
        if (a === 3) {
            break outerLoop;
        }
    }
}
console.log("Finished loop");

// example 5
// setTimeout
// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 500);
// }

// Lecture: For In, For Each, and For Of loops

// For in
/*
    loop through an object's property in arbitrary order
*/
const users = {
    1: "Sally",
    2: "Billy",
    3: "Ashley",
    4: "Timmy",
};

for (const prop in users) {
    let newUser = users[prop];
    newUser = "Redacted";
    console.log(newUser);
}

// For each

// for arrays
const drinks = ["coffee", "tea", "water", "milk"];
drinks.forEach((dr) => {
    console.log(dr);
});

// break keyword
for (let d in drinks) {
    if (drinks[d] === "water") {
        continue;
    }
    console.log(drinks[d]); // coffee, tea, milk
}

// For of loop

/*
    Loops over iterable objects - arrays, strings,
    maps, sets

    for looping for data - like values in an array
*/

// example 1
for (const f of drinks) {
    if (f === "milk") {
        continue;
    }
    console.log(f);
}

// example 2
const myString = "Hello!"
for (const character of myString) {
    console.log(character);
}

// example 3
const originalArr = [10, 15, 20, 25, 30];
const numIncrease = (arr, numInc) => {
    for (let num of arr) {
        num += numInc;
        console.log(num);
    }
}
numIncrease(originalArr, 30);
// 40 45 50 55 60

// Set keyword
const originalNames = ["Chris", "Jane", "Sally", "Bob", "Chris", "Jane", "Sally", "Bob"];
const uniqueNames = new Set(originalNames);

for (const n of uniqueNames) {
    console.log(n);
}