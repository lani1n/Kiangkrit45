/*
https://www.udemy.com/course/programming-in-javascript/learn/lecture/2162886#content
*/

// 1
const is_integer = (int) => {
    if (typeof(int) === "number") {
        console.log(true);
    } else {
        console.log(false);
    }
}
is_integer(12);
is_integer("25");
is_integer("Hello");

// 2
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0;
const add_all = () => {
    for (let i = 0; i < numArr.length; i++) {
        sum += numArr[i]
    }
    console.log(sum);
}
add_all();

// 3
const TempConverterF2C = (value) => {
    let c = (value - 32) / 1.8
    console.log(c + " Celsius");
}
TempConverterF2C(68);

const TempConverterC2F = (value) => {
    let f = (value * 1.8) + 32
    console.log(f + " Fahrenheit");
}
TempConverterC2F(20);

// 4
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
console.log(Factorial(1)); // 1
console.log(Factorial(3)); // 1 * 2 * 3
console.log(Factorial(5)); // 1 * 2 * 3 * 4 * 5