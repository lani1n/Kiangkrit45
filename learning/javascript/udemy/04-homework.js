/*
https://www.udemy.com/course/programming-in-javascript/learn/lecture/2239658#content
*/

// 1
// Write a constructor function to represent a Rectangle, which can
// calculate its area and perimeter.

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

console.log(`Area: ${rect.calcArea()}`);
console.log(`Perimeter: ${rect.calcPerimeter()}`);
console.log(rect);

// 2
// Write a Point function which takes x and y coordinates as
// arguments to define it. It should also be able to evaluate the
// distance from another point. We may make use of this exercise in
// a later assignment problem when dealing with the Document
// Object Model.

// 3
// Write javascript code so that we can check if a string object is a
// palindrome. E.g. "xyx".isPalindrome() should return true.

const ifPolindrome = (str) => {
    const reversedStr = str.split("").reverse().join("");
    return (str === reversedStr) ? true : false
}
console.log(ifPolindrome("abcba"))
console.log(ifPolindrome("12"))