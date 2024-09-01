// reference for homework4
/*
sample 1
 
from https://bit.ly/33LIGGt

    function syllogism(name) {
        let listObject = {
            'pen': 'object',
            'house': 'object',
            'Socrates': 'man',
            'Dogs': 'animals',
            'trees': 'plants'
        }

        const typemortals = ['man', 'animal', 'plants'];

        if (typeof name != 'string') {
            return 'Error parameter, should be a string';
        }

        if (listObject.hasOwnProperty(name)) {
            if (typemortals.includes(listObject[name])) {
                return true;
            } else {
                return false
            }

        } else {
            return 'Name do not exist';
        }
    }

    console.log(syllogism('Dogsxpto')); // Name do not exist
    console.log(syllogism(123)); // Error parameter, should be a string
    console.log(syllogism('Dogs')); // False
    console.log(syllogism('Socrates')); // False

*/

/*
sample 2

from https://bit.ly/2RnpyMg 

    const Socrates = "man";
    let gh;
    let mortalTest = function(name) {
        var test = function(name){
            if(name === "man"){
                return true;
            }else if(typeof name === "undefined"){
                return false;
            }else{ return false; }
        }
        return test(name);
    }
    console.log(mortalTest("man"));
    console.log(mortalTest(""));
    console.log(mortalTest("karan"));
    console.log(mortalTest(45));
*/

// refactoring

const Socrates = "man"
let mortalTest = (name) => {
    let test = (name) => {
        if (name === "man") {
            return true;
        } else if (typeof name === "undefined") {
            return false;
        } else { return false; }
    }
    return test(name)
}
console.log(mortalTest());
console.log(mortalTest(""));
console.log(mortalTest("man"));
console.log(mortalTest(14));