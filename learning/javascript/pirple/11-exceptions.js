// Lecture: Throwing Exceptions

// Exception Handling

/*
Throw Your own Exception
    - Use the throw statement to throw own exception
    - You specify the expression containing the value
    to be thrown
    e.g. throw expression
    - Can throw any expression
*/

// example 1

// const myObj = {a: 1, b: 2}
// const myObj = [1, 2, 3]
// myObj.map((obj) => console.log(obj));
// console.log("test");

// example 2

const checkIfNum = (n) => {
    if (isNaN(n)) {
        throw "this is not a number error";
    }
    else {
        console.log(n);
    }
}
// checkIfNum("hey");
checkIfNum(2);

// example 3

// throw 500;

// example 4

const myObjException = {
    toString: (params) => "I am an object exception"
}

function myException(message) {
    this.message = message;
    this.name = "My exception";
    this.toString = () => `${this.name} ${this.message}`
}

const exception = new myException("hi");
// throw new myException("Field invalid!")

// Lecture: Try, Catch, Finally

try {
    throw "Exception!";
}
catch(e) {
    console.log(e);
}

const finallyExample = () => {
    try {
        console.log("Hi");
        throw "test";
    }
    catch(e) {
        console.log(e);
        return true;
    }
    finally {
        console.log("Can I run?");
        return false;
    }
    console.log("This line cannot run");
}
finallyExample();