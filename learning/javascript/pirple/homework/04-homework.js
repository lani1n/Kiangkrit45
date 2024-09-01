// Homework 4 - Functions 

const isThisMortal = (name) => {
    if (typeof name != "string") {
        return false;
    } else if (name === "") {
        return false;
    } else {
        return true;
    }
}
console.log(isThisMortal());
console.log(isThisMortal(''));
console.log(isThisMortal(1));
console.log(isThisMortal("James"));
console.log(isThisMortal("John"));

// Extra Credit
const flavor = ['chocolate', 'vanilla'];
const isChocolate = false;
const cake = () => {
    if (isChocolate === true) {
        console.log(flavor[0]);
    } else {console.log(flavor[1])}
}
cake();