// Lecture: Object Property Shorthands

const a = 10, b = 20, c = 30;
const d = { a: a, b: b, c: c, };
const objectBuilder = (x, y, z, numTimes) => {
    const allObjects = [];
    for (let i = 0; i < numTimes; i++) {
        const newObject = { x, y, z, };
        allObjects.push(newObject);
    }
    return allObjects;
}
const Bob = objectBuilder(10, "Bob", false, 1);
const { x:bobID } = Bob[0];
console.log(Bob);
console.log(bobID);

// Lecture: Computed Property Keys

// Computed property keys
// Allows use of [] which will evaluate as the property name

let myID = 0;
const idParam = "userID";
const computedObj = {
    [idParam + ++myID]: "1003411",
    [idParam + ++myID]: "353245425141",
    ["param" + "eter"]: false,
}
const capitalizer = (word) => {
    const a = word.charAt(0).toUpperCase();
    const b = word.slice(1).toLowerCase();
    return a + b;
}
const myObject1 = {
    [capitalizer("hello")] : "something",
    [capitalizer("ALLCAPS")] : "sfkakdaada"
}
const dataFormatter = (arr) => {
    const formattedObj = {};
    for (const prop of arr) {
        formattedObj["userID" + prop.x] = prop;
    }
    return formattedObj;
}
console.log(dataFormatter(Bob))
console.log("--------------------------------")

// Lecture: Maps and Sets

/* 
    - Used for simple key/value pairs
    - Any value can be used for either a key or value (i.e. object, string, function)
    - Reasons for using Map over Object
        - Object prototype has default keys that might conflict with own keys
        - Keys of map can be anything, whereas with object, have to be string or symbol
        - Can easily get the size
*/
const myMap = new Map();
const firstKey = "key";
const firstValue = "first value :D";
const secondKey = {};
const thirdKey = function() {};
myMap.set(firstKey, firstValue);
myMap.set(secondKey, "anotherValue");
myMap.set(thirdKey, "otherValue");
/*
    - Iterating
    - keys(), values(), entries()
*/
console.log(myMap.size);
for (const [key, value] of myMap.entries()) {
    console.log(`${key} => ${value}`);
}
const myMapData = [["keyA", "value one"], ["keyB", "value two"]];
const anotherMap = new Map([
    ["entry1", "value1"],
    ["entry2", "value2"],
]);
/*
    - Set Object
    - Lets you store unique values of any type
    - Each element is unique
*/
const mySet = new Set();
const obj123 = { a: 1, b: 2, c: 3 };
const obj456 = { x: 1, y: 2, z: 3 };
const myString = "Hello there :D";
const aBool = true;
mySet.add(obj123);
mySet.add(obj456);
mySet.add(myString);
mySet.add(aBool);
console.log(mySet.size);
mySet.forEach(n => {
    let x = "we got an object" ? typeof n === "object" : n;
    console.log(x);
})
for (const [key, value] of mySet.entries()) {
    console.log(`${key} => ${value}`);
}
const arrFromSet = Array.from(mySet);
arrFromSet.push(myString);
const myArr123 = [1, 1, 1, 1, 2, 3, 5, 1];
const anotherSet = new Set(myArr123);
const yetAnotherSet = new Set(["a" , "z", "q", "t"]);
console.log(arrFromSet);
console.log(anotherSet);
console.log(yetAnotherSet);