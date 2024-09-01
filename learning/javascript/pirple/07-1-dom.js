// Lesson 8 - the DOM
//
// Lecture: Introduction to the DOM
//
/*
    Programming interface for HTML & XML documents
        - provide a structured representation of the document
        - define methods to access the structure and manipulate
        - connect web pages to scripts or programming language
        - DOM is NOT a programming language, it provides a model of web page
        - the page content is stored in the DOM and can be accessed and manipulated in JavaScript
        - "The DOM provides a representation of the document as a structured group of nodes
        and objects that have properties and methods."
*/

// Lecture: Getting an Element by ID
//

const allSpans = document.getElementByIdTagName("span");

for (const prop of allSpans) {
    prop.innerHTML = "Somebody";
}