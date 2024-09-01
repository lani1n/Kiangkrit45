/*
https://www.udemy.com/course/programming-in-javascript/learn/lecture/1723400#overview
Programming in JavaScript
*/

/*
Section 4: Object Oriented Programming with JavaScript
*/

// 50 Coverage
// 51 Functions as Objects

const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
console.log(person);
console.log(person.fullName());

const a = Number(4);
console.log(typeof a); // number

const b = new Number(5);
console.log(typeof b); // object

console.log(a + b); // 4 + 5 = 9

// 52 The "this" Keyword

// this
// global context
// function context
    // simple function
    // method on an object
    // constructor function

const test = () => console.log(this); // {}
test();

const aCircle = {
    radius: 3,
    area: function() {
        return Math.PI * this.radius * this.radius;
    }
}
console.log(aCircle);
console.log(aCircle.area());

// 53 Constructor Functions

// case 1
function CircleA(r) {}

const c = new CircleA(2);
console.log(c); // Circle {}

// case 2
function CircleB(r) {
    this.radius = r;
}

const d = new CircleB(2);
console.log(d); // Circle { radius: 2 }

// case 3
function CircleC(r) {
    this.radius = r;
    this.area = function() {
        return Math.PI * this.radius * this.radius
    }
}

const e = new CircleC(2);
console.log(e);
console.log(e.area());

// 54 Using the "prototype" Property

function anotherCircle(r) {
    this.radius = r;
    this.area = () => Math.PI * this.radius * this.radius;
    this.perimeter = () => 2 * Math.PI * this.radius;
}
anotherCircle.prototype.title = "Another Circle";

const g = new anotherCircle(3)
console.log(g); // not showing prototype
console.log(g.title); // not showm but can be used

// 55 Inheritance Using "prototype"

function Shape() {
    this.area = () => "You need to implement this!"
}

function Square(length) {
    this.length = length;
    this.area = () => this.length * this.length;
}

function Rectangle(height, width) {
    this.height = height;
    this.width = width;
}

Square.prototype = new Shape();

Rectangle.prototype = new Shape();

// 2 * 2 = 4
console.log(new Square(2).area());

// not overwriting
// You need to implement this!
console.log(new Rectangle(4, 6).area());