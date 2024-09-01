// Lecture: Destructuring Arrays

/*
    - The destructuring assignment syntax is a JavaScript
    expression making it possible to extract data from
    arrays or objects into distinct variables.
    - Destructuring syntax can be used on left-hand side
    of assignments
*/

const myArr = [1, 2, 3, 4, 5, 6];
const firstMyArr = myArr[0];
console.log(firstMyArr);

const myArray = new Array();
myArray[0] = 6;
myArray[1] = 7;
myArray[2] = 8;
console.log(myArray);

const arrayOfMine = [10, 11, 12, 13, 14]
const [x, y, z] = arrayOfMine;
console.log(x);

const mySecondArray = ["John", "Billy", "Robert"];
let name1, name2, name3;
[name1, name2, name3] = mySecondArray
console.log(`${name1}, ${name2} and ${name3}`);

[name1, name2, name3, name4 = "Harry"] = mySecondArray
console.log(`${name1} and ${name4}`);
console.log(mySecondArray);

// swap variables
let ab = 250;
let ac = 500;
let temp = ac;
console.log(`ab is ${ab} and ac is ${ac}`);
ac = ab;
ab = temp;
console.log(`ab is ${ab} and ac is ${ac}`);

// use function
const returnArray = () => ["donuts", "chocolate", "candy"];
console.log(returnArray());

const [brunch, snack, favorite] = returnArray();
console.log(`favorite is ${favorite}`);

// function 2
const foodFilter = (arr, term) => {
    return arr.filter((t) => t === term);
};

const [result] = foodFilter(["chicken", "fish", "tofu"], "chicken");
const [result2] = foodFilter(["pizza", "ice cream"], "pizza");
console.log(`${result} and ${result2}`);

// ignore some values
const anotherArray = [16, 8, 32, 4, 64, 2, 128];
const [numA,, numB,, numC,, numD] = anotherArray;
const [numE,,, numF] = anotherArray;
console.log(`${numA}, ${numB}, ${numC} and ${numD}`);
console.log(`${numE} and ${numF}`);

// use rest pattern
const sayHi = (firstArg, ...restOfArgs) => {
    console.log(`Hi ${firstArg}`);
    console.log(restOfArgs);
};
sayHi("Chris", 30, "123 Fake St.");

const alsoAnotherArr = ["dogs", "cats", "birds", "snakes", "hedgehogs"];
const [dogStr, catStr, ...otherAnimals] = alsoAnotherArr;
console.log(`dogStr: ${dogStr} \ncatStr: ${catStr} \notherAnimals: ${otherAnimals}`);

// Lecture: Destrucuturing Objects

// Object destructuring
const myObj = {
    firstName: "Will",
    lastName: "Smith",
    age: 16
};
// const firstName = myObj.firstName;
// const lastName = myObj.lastName;
// const age = myObj.age;
const { firstName, lastName, age } =  myObj;
console.log(`${firstName} ${lastName} is ${age}.`);

// example 2
const myObject = {
    myVar1: "a",
    myVar2: "b"
};
const { myVar1, myVar2 } = myObject;
console.log(`${myVar1}${myVar2}`);

// example 3
const myObj2 = {
    q: "JavaScript",
    w: "is",
    e: "not",
    r: "the",
    t: "same as",
    y: "Java"
};
const { q: JS, w, e, r, t, y: Minecraft} = myObj2;
console.log(`${JS} is not ${Minecraft}.`);

// example 4
const myObj3 = {
    uuid: 1357924680,
    userName: "stra1t"
};
const { uuid: userID, userName: nameUser } = myObj3;
console.log(`uuid: ${userID} \nuserName: ${nameUser}`);

// example 5
const stateUser = ({user = "Bob", member}) => {
    console.log(`${user} is ${member}.`);
}
stateUser({member: "vip"})

// example 6
const sayIfValid = ({prop: s}) => console.log(s);
sayIfValid({prop: t}) // line 105

// example 7
const myObj7 = {
    title: "My address book",
    entries: [
        {
            name: "Bob",
            number: "555-5555",
            address: "123 Unknown Roads",
        },
    ],
    phone: "111-1111",
}
const { title, entries: [{name: nnn, address}] } = myObj7;
console.log(nnn);

// https://www.pirple.com/courses/take/keeping-up-with-the-javascripts-part-1/lessons/5724682-lecture-destructuring-objects