// Program 1
// A constructor representing a Rectangle that can calculate area and perimeter.

class Rectangle {
    constructor(width, height) {
        [this.width, this.height] = [width, height];
    }
    calcArea() {
        return this.width * this.height;
    }
    calcPerimeter() {
        return (this.width + this.height) * 2
    }
}
const rect = new Rectangle(4, 6);
// console.log(`Area: ${rect.calcArea()} \nPerimeter: ${rect.calcPerimeter()}`);
// console.log(rect);

// Program 2
// A function that returns a factorial value

const Factorial = (num) => {
    let result = 1;
    if (num == 0 || num == 1) {
        return result;
    }
    else {
        for (let i = num; i >= 1; i--) {
            result = result * i;
        }
        return result;
    }
}
// console.log(Factorial(0));
// console.log(Factorial(5));

// Program 3
// A function returns the most-character string from an array

const string1 = ['a', 'aa', 'aaa'];
const string2 = ['ddd','dddddddd','dddd','ddddd','ddd','dd','d','d','dddddddddddd'];

const reducer = (array) => array.reduce((r, c) => r.length >= c.length ? r : c);
// console.log(reducer(string1));
// console.log(reducer(string2));

// Program 4
// A function returns a sum of squared numbers

const sum_sqrt = (array) => {
    let sum = 0;
    let i = array.length;
    while (i--) {
        sum += Math.pow(array[i], 2)
    }   
    return sum;
}
// console.log(sum_sqrt([2, 3, 4]));
// console.log(sum_sqrt([2, 6, 7]));

// Program 5
// A function checks whether a number in an array is a prime number

const primeArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const isPrime = (num) => {
    for (let i = 2; num > i; i++) {
        if (num % i == 0) return false;
    }
    return num > 1
}
// console.log(primeArray.filter(isPrime));

// Program 6
// A function reverse a string

const reverse2 = (str2) => {
    return str2.split("").reverse().join("");
}
// console.log(reverse2("hello"));

// Program 7
// A function that checks whether a string is a polindrome, same forward and backward.

const ifPolindrome = (str) => {
    const reversedStr = str.split("").reverse().join("");
    return (str === reversedStr) ? true : false
}
// console.log(ifPolindrome("abcba"))
// console.log(ifPolindrome("12"))