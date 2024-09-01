/*
https://www.udemy.com/course/programming-in-javascript/learn/lecture/2216800#content
*/

// 1.1
const reverse = (str) => {
    const splitStr = str.split("");
    const reverseArr = splitStr.reverse();
    const joinArr = reverseArr.join("")
    return joinArr;
}
console.log(reverse("hello")); // olleh

// 1.2

// shorter version
const reverse2 = (str2) => {
    return str2.split("").reverse().join("");
}
console.log(reverse2("hello")); // olleh