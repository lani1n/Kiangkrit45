// Lecture: Rest and Spread

/*
    - More cool ES6 feature
    - Spread syntax
        -> can be used in places where (e.g.) functions expect
        multiple arguments
*/

// example 1:
const myArr = [3, 4, 5];
const mySecondArr = [2, ...myArr, 6, 7, 8];
const myThrdArray = [0, 1, ...mySecondArr, 9];
const spreadFunc = (...multipleArgs) => console.log(multipleArgs);
spreadFunc(myThrdArray);
spreadFunc("hello", "world");

// example 2:
const helloArr = ["James", "Smith", "John"];
const sayHello = (x, y, z) => console.log(`Hello, ${x}, ${y}, ${z}`);
sayHello(helloArr);
sayHello.apply(null, helloArr);

// example 3:
const arrayMine1 = [10, 20, 30];
const arrayMine2 = [40, 50, 60];
arrayMine1.push(...arrayMine2)

// concat()
const iHaveArray = ["beans"];
const iHaveArray2 = ["donuts", "chocolate"];
const iHaveArray3 = ["pie", "lemonade"];
const iHaveNewArray = [...iHaveArray, ...iHaveArray2, ...iHaveArray3];
console.log(iHaveNewArray);
const carParts = ["gasket", "tires", "radiator", "muffler"];
const partsToInsert = ["wipers", "headlights"];
const listInserter = (arr1, arr2, index) => {
    const firstPartArr = iHaveArray.slice(0, index);
    const secondPartArr = iHaveArray.slice(index);
    const assembledCar = firstPartArr.concat(iHaveArray2, secondPartArr);
    console.log(assembledCar);
}
listInserter(carParts, partsToInsert, 2);

// vs rest operator
const hasTooManyArgs = (x, y, ...restOfArgs) => {
    console.log(x, y);
    for (const prop of restOfArgs) console.log(prop + 10);
}
hasTooManyArgs("hi", "world", 1, 50, 987, 12345);

// Method definitions
// Pre-ES6, in object literals, methods are defined as function expressions
const myObj = {
    id: 10,
    sayHi: function() {
        console.log("hi");
    }
}

// ES6 has method definitions for creating methods
const myNewObj = {
    id: 11,
    sayHi() {
        console.log("Hi")
    },
    sayBye() {
        console.log("Bye")
    }
}
const anotherObject = {
    greet(arg1) {
        console.log(`Hey ${arg1}!`)
    },
    anotherMethod(...args) {
        this.greet(args[0]);
        console.log(`I have ${args.length} arguments!`);
    }
}
anotherObject.anotherMethod("Tim", 1, false, true, [123]);