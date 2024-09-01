/*
https://www.udemy.com/course/programming-in-javascript/learn/lecture/1723400#overview
Programming in JavaScript
*/

/*
Section 3: Functional Programming with JavaScript
*/

// 38 Coverage

// Functional Programming

// function xyz(parameter) {
//     code
// }
// xyz()

// 39 Functional Paradigm

// programming paradigms
    // procedural
    // object oriented
    // functional

// object oriented language
    // objects
        // Circle c = new Circle(5);
        // c.area();

// functional language
    // functions
        // area = area_of_circle(5);

const abc = () => 4;
// not calling function
console.log(abc);
console.log(abc + 6);

// calling function
console.log(abc());
console.log(abc() + 6);

// 40 Higher Order Functions

const odd_num_printer = (upto) => {
    for (let i = 0; i <= upto; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

const num_printer = (upto, filter) => {
    for (let i = 0; i <= upto; i++) {
        if (filter(i)) {
            console.log(i);
        }
    }
}

const is_odd = (n) => {
    return n % 2 != 0;
}
console.log(num_printer(10, is_odd));

// Higher Order Function
    // A function that either takes a function
    // as argument or returns a function

// 41 Anonymous Functions

[1, 2].forEach(function (i) {
    console.log(i);    
})

const print_element = (el) => console.log(el);
[1, 2].forEach(print_element)

// 42 Nested Functions

const hypotenuse = (a, b) => {
    const y = 46
    const sqaure = (x) => {
        console.log(y);
        return x * x;
    }
    return Math.sqrt(sqaure(a) + sqaure(b))
}
console.log(hypotenuse(3, 4));

// 43 Closures

var scope = "global scope";
const checkscope = () => {
    var scope = "local scope";
    const f = () => scope;
    return f();
}
console.log(scope); // global scope
console.log(checkscope()); // local scope

// 44 Closures - an Example

const step_iterator = (start, step) => {
    return function() {
        const res = start;
        start = start + step;
        return res;
    }
}
const stepsOfTwo = step_iterator(0, 2);
console.log(stepsOfTwo()); // 0
console.log(stepsOfTwo()); // 2
console.log(stepsOfTwo()); // 4

// 45 List Comprehension - Filter Function

const listA = [2, 3, 4, 6, 7, 12, 15];
const isEven = (elem) => elem % 2 == 0;
console.log(listA.filter(isEven));

console.log(listA.filter(function(elem) {
    return elem % 2 == 0;
}));

// Callback Function
// function(elem, index, array) {
//     . . .
// }

const isEven_new = (current, index, array) => {
    console.log(current + " :: " + index + " :: " + array);
    return current % 2 == 0;
}
console.log(listA.filter(isEven_new));

// 46 List Comprehension - Map Function

const ListB = [3, 4, 6, 7, 9];

console.log(ListB.map(function(elem) {
    return elem * elem
}));

// 47 List Comprehension - Reduce Function

// Callback Function
// function (prev, curr, index, array) {
// 
// }

// prep: value previously returned in the last invocation
// of the callback, or, initial value, if suppied
// curr: current element being processed in the array
// index: index of the curr element
// array: array on which reduce was calle

const range = (start, end, step) => {
    let res = [];
    let item = start;
    while (item <= end) {
        res.push(item);
        item = item + step;
    }
    return res;
}

const sum_natural_nos = (n) => {
    return range(1, n, 1).reduce(function(prev, curr) {
        return prev + curr;
    });
}
console.log(sum_natural_nos(3));

// 48 Accessing Variable Number of Arguments

function sum() {
    let args = Array.prototype.slice.call(arguments);
    return args.reduce(function(prev, curr) {
        return prev + curr;
    });
}
console.log(sum(3, 5, 6));