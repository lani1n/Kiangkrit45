// Homework #10: Destructuring

/*
    Destructing an array utilizes brackets [] to signal that an array is being destructed,
    but an object uses braces {} to construct new variables standing for the object being destructed.

    Another distinction is that when destructuring an object, we do not need to keep the order of the properties,
    only the name of the property. When we do the same thing with an array, however, we must keep its order.
*/

// Object destructuring
const frontEnd = {
    index: "HTML",
    style: "CSS",
    script: "JavaScript"
};

const {index, style, script} = frontEnd;
console.log(index, style, script);

const {index: html, style: css, script: js} = frontEnd;
console.log(html, css, js);

const {script: documentLanguage} = frontEnd;
console.log(`This file is written in ${documentLanguage}.`);

// Array destructuring
const highLevel = ["C++", "C#", "Java", "Python"];

const [lang1, lang2, lang3, lang4] = highLevel;
console.log(lang1, lang2, lang3, lang4);

const [Difficult, , , Easy] = highLevel;
console.log(`${Difficult} is more difficult than ${Easy}.`);