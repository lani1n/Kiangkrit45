// Lecture: Callbacks

// Callbacks
// A way to write a synchronous JavaScript
/*
    - A callback function is a function passed to
    another function as a parameter.
    - This inner function is called at some point after
    during the execution of the containing function.
    - In other word, it's called at some specific point
    inside the containing function's body.
*/

// example: 1

const shouldGoFirst = () => {
    setTimeout(() => {
        console.log("I should always go first.");
    }, 250);
}
const shouldGoSecond = () => console.log("I should always go second.");
// shouldGoFirst();
// shouldGoSecond();

// example: 2

const sumUpNumbers = (num1, num2, cb) => {
    let summedValue;
    setTimeout(() => {
        summedValue = num1 + num2;
        cb(summedValue);
    }, 250);
}
const logSummedValue = (val) => {
    console.log(`The summed value is: ${val}.`);
}
// sumUpNumbers(100, 150, logSummedValue);

// example: 3

const sayWhenDone = () => console.log("Done! :D");
const looper = (number, cb) => {
    for (let i = 0; i < number; i++) console.log(i);
    cb();
}
// looper(6, sayWhenDone);

// example: 4

const sayWhenFinished = (loopCount) => {
    console.log(`Capitalized ${loopCount} names`);
}
const looping = (arr, cb) => {
    let i = 0;
    for (i; i < arr.length; i++) {
        const name = arr[i];
        const captalizedName = name.charAt(0).toUpperCase() + name.slice(1);
        arr[i] = captalizedName;
    }
    cb(i);
}
const myNames = ["chris", "russell", "toby", "angela"];
// looping(myNames, sayWhenFinished);
// console.log(myNames);

// example: 5

const anotherLogged = (num1, num2, sth) => {
    const squaredAndSummedNums = (num1 * num1) + (num2 * num2);
    console.log(squaredAndSummedNums);
    if (sth) sth(squaredAndSummedNums);
}
// anotherLogged(10, 50, (p) => {
//     console.log(`Squared and summed = ${p}`)
// });

// Lecture: Promises

// Promises
/*
    - A Promise is a proxy for a value not necessarily known when the
    promise is created, says Mozilla Developer Network.
    - Promises (similar to callbacks) are used for async computations
    - Think of a promise as representing as a value that may be
    available now, later, or never
    - Can associate a handler with an async action
    - A promise exists in three states:
        - Pending: initial state, not fulfilled
        - Fulfilled: OK! Got it
        - Rejected: failed
*/
const test = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) reject("promises no good! Rejected");
    setTimeout(() => resolve("promise OK!"), 250);
});
test.then((resolveMessage) => {
    console.log(`Looks like: ${resolveMessage}`);
}).then(() => {
    console.log("I should run after the promise is resolved");
}).catch((rejectMessage) => {
    console.log(`Error: ${rejectMessage}`);
})

const numAdder = (n1, n2) => {
    return new Promise((resolve, reject) => {
        const addedNums = n1 + n2;
        setTimeout(() => resolve(addedNums), 500);
    });
}
const numSquarer = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num * num), 800);
    });
}
numAdder(10, 10)
    .then(data => numSquarer(data))
    .then(moreDate => console.log(moreDate))
    .catch(er => console.log(err));
const alwaysResolve = () => Promise.resolve("Love Resolving");
const prom = Promise.resolve([10, 20, 30]);
prom
    .then(nums => nums.map(num => num * 10))
    .then(transfromedNums => console.log(transfromedNums));
const anotherProm = Promise.resolve({text: "resolved"});
anotherProm.then(data => console.log(data.text));

Promise.reject()
    .then(
        res => {
            return Promise.reject();
        },
        err => {
            console.log("rejected");
        }
    ).then(
        res => {
            console.log("cool");
        },
        err => {
            console.log("Inner promise rejected");
        }
    ).catch(data => console.log(data))

const timeLogger = (message, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message)
        }, time);
        if (typeof message != "string" || typeof time != "number") reject()
    });
}
timeLogger("first", 1000)
    .then(message => {
        console.log(message);
        return timeLogger("second", 800);
    }).then(message => {
        console.log(message);
        return timeLogger("third", 100);
    }).then(message => {
        console.log(message);
        return timeLogger("fourth", 300);
    }).then(message => {
        console.log(message);
    }).catch(err => console.log("incorrect input"));

Promise.resolve("Hi")
    .then(string => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(string + "there, "), 1);
        });
    }).then(string => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(string + " Chris"), 1);
        })
    })