// JavaScript Programming for Beginners
// https://www.bitdegree.org/user/course/javascript-for-beginners

// Array of Object Literals
let persons = [
    {
        name: "John Doe",
        isCoder: false,
        age: 19
    },
    {
        name: "James Bond",
        isCoder: true,
        age: 14
    },
    {
        name: "Jimmy Fools",
        isCoder: false,
        age: 16
    }
]
console.log(persons[0].age); // 19
console.log(persons[1]);
/*
    {
        name: "James Bond",
        isCoder: true,
        age: 14
    },
*/
console.log(persons[2].isCoder); // false

// if else statement
let age = 10;
// age = 5;
// age = 16;
// age = "age";

if (age === 10) {
    // use === same value and data type
    // use == same value
    console.log("Value is 10");
} else if (age < 10) {
    console.log("Value is smaller than 10")
} else if (age > 10) {
    console.log("Value is greater than 10")
} else {
    console.log("Invalid")
}

// switch statement
let x = 15;
x = 13;

switch(x) {
    case 10:
        console.log("x is 10");
        break; // stop running code
    case 20:
        console.log("x is 20");
        break;
    default:
        console.log("x is " + x);
        // return the exact inputted value
        break;
}

// loops
for (let i = 0; i < 5; i++) {
    // i++ = i + 1
    // print 0 - 4
    console.log(i);
}

for (let i = 0; i < persons.length; i++) {
    console.log(persons[i].age);
}

let a = 0;
// if a < 0 
while(a < persons.length) {
    // persons.length = 3
    console.log(persons[a].name);
    a++;
}

for(person of persons) {
    console.log(person);
}

// functions
function fullName() {
    const fname = "Tony";
    const lname = "Stark";

    // my preferable way
    console.log(fname + " " + lname);

    // alternative
    console.log(`${fname} ${lname}`);
}
fullName();

function FULLname(Fname, Lname) {
    // with paramater
    console.log(Fname + " " + Lname);
    // use
    // return Fname + " " + Lname;
    // cause "Harry Potter" to not shown up
}
FULLname("Harry", "Potter");


function Fullname(firstName, lastName) {
    // with parameter and return keyword
    return firstName + " " + lastName;
}
const Fullname1 = Fullname("Peter", "Parker");
console.log(Fullname1)

// arrow functions
const sum = (num1, num2) => {
    console.log(num1 + num2)
};
sum(12, 32);

const newfun = name => console.log(name);
// can delete arrow function
newfun("Noelle");