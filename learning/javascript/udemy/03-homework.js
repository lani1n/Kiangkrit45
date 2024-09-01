/*
https://www.udemy.com/course/programming-in-javascript/learn/lecture/2227532#content
*/

// 1

const string1 = ['a', 'aa', 'aaa'];
const string2 = ['ddd','dddddddd','dddd','ddddd','ddd','dd','d','d','dddddddddddd'];

const reducer = (array) => array.reduce((r, c) => r.length >= c.length ? r : c);

console.log(reducer(string1));
console.log(reducer(string2));

// 2

const sum_sqrt = (array) => {
    let sum = 0;
    let i = array.length;
    while (i--) {
        sum += Math.pow(array[i], 2)
    }   
    return sum;
}
console.log(sum_sqrt([2, 3, 4])); // 4 + 9 + 16
console.log(sum_sqrt([2, 6, 7])); // 4 + 36 + 49

// 3

const listA = [2, 3, 4, 6, 7, 12, 13];
const listB = [1, 5, 8, 9, 10, 11, 14];

const isEven = (array) => array % 2 == 0;
console.log(listA.filter(isEven));
console.log(listB.filter(isEven));

// 4

// 4.1 Find all prime numbers in an array
const primeArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const isPrime = (num) => {
    for (let i = 2; num > i; i++) {
        if (num % i == 0) return false;
    }
    return num > 1
}

console.log(primeArray.filter(isPrime)); // [2, 3, 5, 7, 11, 13]