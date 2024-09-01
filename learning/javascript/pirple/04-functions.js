// Lesson 5 - Functions
//
// Lecture: functions introduction
// 
// Function

    /*
    "A function is a JavaScript procedure - a set of statements
    that performs a task or calculates a value [...]"
    - Mozilla Developer Network
    */
   
// calling function
// 
// case 1
function sayHi1() {
    console.log("Hi from sayHi1");
}
sayHi1(); // call function

// case 2
const person = "Geralt"

function sayBye1() {
    console.log("Bye " + person + " of Rivia");
}
console.log(person)
sayBye1();

// parameter
// 
// case 1
function sayhi2(someone) {
    console.log("Hi" + " " + someone)
}
sayhi2(); // undefined
sayhi2("Jimmy");

// case 2
function sayHi2(fname, lname) {
    console.log("Hello!" + " " + fname + " " + lname)
}
sayHi2(); // both undefined
sayHi2("Logan"); // second undefined
sayHi2("Thor", " ") // defined
sayHi2("Tony", "Stark") // proper method

// case 3
function sayBye2(fname) {
    console.log("Bye bye" + " " + fname)
}
const william = "William";
const charlotte = "Charlotte";
sayBye2(william);
sayBye2(charlotte);

// type 3
// 
// case 1
function ndouble(num) {
    console.log(num * 2);
}
ndouble(10);

// case 2
function ndouble1(num) {
    return num * 2;
}
console.log(ndouble1(10))

// case 3
function ndouble2(num) {
    const ndouble2 = num * 2;
    return ndouble2;
}
console.log(ndouble2(10))

// type 4 Hoisting (recap)
//
// case 1
const myName1 = "Chris";
function sayHi3() {
    if (!myName1) {
        var myName1 = "Ethan";
    }
    console.log("Hi" + " " + myName1);
}
sayHi3();
// Hi Ethan
// because var keyword is hoisted to the top
// even before const keyword

// case 2
function sayHi4(myName4) {
    if (!myName4) {
        var myName4 = "Ethan";
    }
    console.log("Hi" + " " + myName4);
}
sayHi4("Chris");

// case 3
const squarednum = function(num) {
    return num * num
}
const numberadder = function(num1, num2) {
    return num1 + num2;
}
console.log(numberadder(squarednum(4),10));

// type 5
// 
// case 1 
let myNumber = 100;
function addTwenty(num) {
    return num + 20;
}
console.log(addTwenty(myNumber));
console.log(myNumber);

// case 2
const myInfo = { name: "Chris", age: 30 }

function changeAgeTo100(myObj) {
    myObj.age = 100;
}
console.log(myInfo);

// Lecture: Nested Functions (Closures)
// 
// 1
function squareAndMutliply(num1, num2) {
    function squarer(x) {
        return x * x;
    }
    return squarer(num1) * squarer(num2);
}
console.log(squareAndMutliply(2, 4));

const first = squareAndMutliply(4, 4);
const second = squareAndMutliply(2, 10);
const third = squareAndMutliply(4, 200);
console.log(first);
console.log(second);
console.log(third);

// 2
function nameFormatter(fname, lname, age) {
    function formatNames(arg1, arg2) {
        return arg1 + " " + arg2;
    }
    const formatTEDNames = formatNames(fname, lname);
    return formatTEDNames;
}
console.log(nameFormatter("Will", "Smith", 50));

// 3
function personFormatter(firstName, lastName, age) {
    function FormatName(arg1, arg2) {
        return arg1 + " " + arg2;
    }
    function dataFormatter(fullName, Num) {
        const formattedData = {
            name: fullName,
            age: Num
        }
        return formattedData;
    }
    const formattedName = FormatName(firstName, lastName);
    return dataFormatter(formattedName, age);
}
console.log(personFormatter("William", "Shakespear", 15));

// Lecture: Advanced Functions
//
// Arrow Function
//
// between function keyword
let sayHi = function() {
    console.log("Hi");
}
sayHi();

// and arrow function
let sayHello = () => {
    console.log("Hello");
}
sayHello();

// more example
// 1
const mutliplier = (num1, num2) => num1 * num2
console.log(mutliplier(5, 10));

// 2
const users = [
    {name: "Chris", age: 60},
    {name: "Jane", age: 30},
    {name: "Billy", age: 45}
];
const mapUserName = (myArr) => {
    const userNamelist = myArr.map((user) => {
    return user.name;
    });
    return userNamelist;
}
console.log(mapUserName(users))

// 3
const mutliplier1 = (x, y) => {
    return x * y
}
console.log(mutliplier1(2, 3))

// 4
const mutliplier2 = (x, y) => x * y
console.log(mutliplier2(2, 3))

// 3
const squarer1 = (num) => num * num;
console.log(squarer1(12))

// 4
const numbers = [1,2,3,4,5,6,7,8,9,10];
const filterednumbers = numbers.filter((num) => 
    num % 2 === 0
);
console.log(filterednumbers);

// Default Parameters
// 
// 1
function numberMultiplier(x,y) {
    x = x || 5;
    y = y || 10;
    return x * y;
}
console.log(numberMultiplier()) // 50
console.log(numberMultiplier(2)) // 20 y default is 10
console.log(numberMultiplier(2, 3)) // 6

// 2
// shorter 
function numberMultiplier1(x=5,y=10) {
    return x * y;
}
console.log(numberMultiplier1())
console.log(numberMultiplier1(2))

// 3
function stringSplitter(str="How are you") {
    return str.split(" ");
}
console.log(stringSplitter("I am fine"))

// 4
const BankAccount = {
    canSpendMoney: true,
    hasCreditCard: true,
    balance: 100
}
function canPurchaseItem(price, acct=BankAccount) {
    if (acct.canSpendMoney) {
        acct.balance -= price;
        if (acct.balance <= 0) {
            acct.canSpendMoney = false;
        }
        return true;
    }
    else {
        return false;
    }
}
console.log(canPurchaseItem(101))
console.log(BankAccount) // balance is negative
console.log(canPurchaseItem(1)) // now false