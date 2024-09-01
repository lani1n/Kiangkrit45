// Lecture: Template Literals

/*
    - String Literals allowing embedded expressions
    - Makes it easier to create multiple strings and allows string interpolation
    - Enclosed in back-ticks (` `)
    - ${} contains an expression
*/

/*
example 1
*/

const myFirstName = "Christ";
const myLastName = "Jones";
const myAge = "30";

console.log("Hello," + " " + myFirstName + ". I am" + " " + myAge + " " + "years old.");

const myNewList =
"<ul>\n" +
    "<li>I am item 1</li>\n" +
    "<li>I am item 2</li>\n" +
    "<li>I am item 3</li>\n" +
"</ul>";
console.log(myNewList);

// const myDiv = document.getElementById("myDiv");
// myDiv.innerHTML = myNewList;

const firstName = `Sam`;
const lastName = `Smith`;
const fullName = `${firstName} ${lastName}`

console.log(fullName);

/*
example 2
*/

const isTrue = true;
console.log(`Is true: ${isTrue}`);
console.log(`Is true: ${!isTrue}?`);

const dateNow = new Date();
const localeDate = dateNow.toLocaleString();
console.log(`Today's date is: ${localeDate}`);

const a = 12;
const b = 23;
console.log(`Sum of ${a} and ${b} is: ${a + b}`);

const myArray = [1, 2, 3, 4, 5];
console.log(`${myArray.map((num) => num + 5)}`);

const pizzaToppings = ["chees", "mushroom", "sauce", "pepperoni"];
const myPizzaArticle =
`<article>
<h1>Pizza Ingredients</h1>
<ul>
${pizzaToppings.map((ingredient) => `<li>${ingredient}</li>`).join("")}
</ul>
</article>`

// const pizzaDiv = document.getElementById("pizzaDiv");
// pizzaDiv.innerHTML = myPizzaArticle;

const templateParser = (arrayOfStrings, expression1, expression2) => {
    console.log(`${arrayOfStrings}, ${expression1}, ${expression2}`);
}

const person = "Mark";
const personAge = 21;
const myTemplateLiteral = templateParser `I am ${person}, age: ${personAge}`