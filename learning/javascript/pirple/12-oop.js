// Lecture: Introduction to OOP

/*
    - OOP: basic idea is that you use objets to represnet
    real world things. Objects have own properties
    and functions (methods)
    - Objects can contain data and other code to represent
    info about what you're trying to model
    - In classic OOP, class is defined, then, when an instance
    of that class is created, all the properties and methods
    are copied over the instance
    - JavaScript is dynamic and does not provide a traditional
    class implementation per se.
    - JavaScript inheritance is prototype based
    - Each object hasa private properties called the prototype
    - The prototype can have a prototype of its own
    - Nearly all objects in JavaScript are instances of object
    which sits on the top of the prototype chain.
*/

// example 1

function Ship() {
    this.floats = true;
    this.material = "steel";
    this.whatAmI = function() {
        console.log(`I am made of ${this.material}.`);
    }
}

const myShip = new Ship();

// example 2

const myObj = {
    a: 1,
    b: 2,
}
console.log(myObj.valueOf());

// example 3

const myString = "hello";
console.log(myString.charAt(0));

// example 4

const myArray = ["a", "b", "c"];
myArray.push("d");
// console.log(Array.prototype);

// example 5

const name1 = {
    name: "Billy",
    age: 16,
    sayName: function() {
        console.log(`My name is ${this.name}.`);
    }
}

const name2 = Object.create(name1);
name2.name = "John";
name2.age = 16;

name2.sayName();

const name3 = Object.create(name2);
console.log(name2.hasOwnProperty("age"));

// Lecture: Object Constructors

function Animal(name, age) {
    this.name = name;
    this.age = age;
}

Animal.prototype.sayBreed = function() {
    console.log(`I am a ${this.breed}.`);
}

const dog1 = new Animal("Spike", 3, "Labrador");
// Object -> Animal -> Dog1

const dog2 = new Animal("Spot", 2, "Golden Retriever");
console.log(Animal.prototype.hasOwnProperty("sayBreed"));

// Lecture: Object Inheritance

Animal.prototype.makeNoise = function() {
    console.log(`generic animal noise`)
}

function dogDog(name, age, breed) {
    Animal.call(this, name, age);
    this.breed = breed;
}

dogDog.prototype = Object.create(Animal.prototype);
dogDog.prototype.constructor = dogDog;
dogDog.prototype.makeNoise = function() {
    console.log(`bark bark, woof`)
}

function Cat(name, age, coloration) {
    Animal.call(this, name, age);
    this.coloration = coloration;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.scratchPost = function() {
    console.log(`Cat has scratched the post.`)
}

function Kitten(name, age, coloration, litter) {
    Cat.call(this, name, age, coloration);
    this.litter = litter;
}

Kitten.prototype = Object.create(Cat.prototype);
Kitten.prototype.constructor = Kitten;

const barky = new dogDog("Barky", 1, "Chihuahua");
const kitty = new Cat("Kitty", 3, "tabby");
kitty.makeNoise();

console.log(barky.name)
console.log(kitty.name)