/*
What is Hoisting?

In JavScript, a variable can be declared after it has been used

But there are some rules:

Variables defined with var are hoisted to the top of the list, 
it therefore can be used before declared.

Those with let and const are hoisted to the top of the block without being initialized.

Attempting to use a let variable before declared results in a ReferenceError.

Doing so with a const variable is a syntax error, so the code will not run.
*/

/*
var keyword

To declare a variable in JavaScript you must use var. 
A variable must be given a distinct name. 
When you declare a variable or before using it, 
you can assign a value by using = operator.
*/

var Greeting1 = "Hi! World";
// reassigned
if (true) {
    var Greeting1 = "Hey! World";
    Greeting1 = "Hello! World";
    console.log(Greeting1);
}
// global scope
console.log(Greeting1);

/*
let keyword

It is used to define a variable with a restricted (block) scope
Using let before declared results in ReferenceError
*/

let Greeting2 = "Good Evening! World";
// restricted scope
if (true) {
    let Greeting2 = "Good Morning! World";
    // redeclared
    Greeting2 = "Good Afternoon! World";
    console.log(Greeting2);
}
console.log(Greeting2);

/*
const keyword

It behaves like let keyword but it cannot be reassigned.
However, it can be changed property such as objects and arrays.
*/

const Greeting3 = "What's Up! World";
if (true) {
    const Greeting3 = "Yo! World";
    /*
    cannot re-declared
    neither
        Greeting3 = "Salut! World";
    nor
        const Greeting3 = "Hola! World";
    works
    */
    console.log(Greeting3);
}
console.log(Greeting3);