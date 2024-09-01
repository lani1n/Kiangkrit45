// Lecture: Introduction to Classes

// Object-oriented JavaScript Part 2: Classes
// Classes in ES6 are just syntactical sugar over JavaScript's
// existing prototype-based inheritance
// Simple, clean syntax for create objects and take care of inheritance

// Pre ES6 way

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.greetings = function() {
//     console.log("Greeings :D");
// }

// function Employee(name, age, role) {
//     Person.call(this, name, age);
//     this.role = role;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// const Bill = new Employee("Bill", 41, "janitor");
// Bill.greetings();

// Class method
// Class are NOT hoisted

// 1. Class Declaration
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greetings() {
        return "Greetings"
    }
    static sayHello() {
        console.log("Hello, this is class Person.")
    }
}

// 2. Class Expression
// const Person = class {}

const Bob = new Person("Bob", 30);
console.log(Bob);

// Lecture: Class Inheritance

// Super keyword
// calls functions on an object's parent class

class Employee extends Person {
    constructor(name, age, position) {
        super(name, age);
        this.position = position;
    }
    testGreeting() {
        const parentString = super.greetings();
        console.log(`${this.name} says ${parentString}.`)
    }
}

const Barb = new Employee("Barb", 27, "developer");
console.log(Barb);
Barb.testGreeting();

class Customer extends Person {
    constructor({name = "customer", age = "n/a", contactMethod}) {
        super(name, age);
        this.contactMethod = contactMethod;
        this.accountCredit = null;
    }
    addCredit(amount) {
        this.accountCredit += amount;
    }
    reduceCredit(amount) {
        this.accountCredit -= amount;
    }
    static sayHi() {
        console.log("Hi!");
    }
    static sayCustomerName(...customers) {
        for (const i of customers) {
            console.log(i.name);
        }
    }
    static transferCredit(source, target) {
        const amount = source.accountCredit;
        target.accountCredit += amount;
        source.accountCredit -= amount;
    }
}

const customer1 = new Customer({name: "Bob", contactMethod: "email"});
const customer2 = new Customer({name: "Jane", contactMethod: "mobile"});
const customer3 = new Customer({name: "Ashley", contactMethod: "email"});

console.log(customer1); // default value

customer1.addCredit(100);
console.log(customer1.accountCredit);

Customer.sayHi();
Customer.sayHello(); // inherited from class Person
Customer.sayCustomerName(customer1, customer2, customer3);
Customer.transferCredit(customer1, customer2);
console.log(`customer 1: ${customer1.accountCredit} \ncustomer 2: ${customer2.accountCredit}`);