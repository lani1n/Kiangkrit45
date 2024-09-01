const reverseJsonArr = (json) => {
    try { 
        const arrayObj = JSON.parse(json);
        arrayObj.reverse();
        return JSON.stringify(arrayObj);
    }
    catch(e) {
        return false;
    }
}

// correct
console.log(reverseJsonArr('["a","b","c"]'));

// wrong
console.log(reverseJsonArr(123));

// 1. Without any arguments
console.log(reverseJsonArr());

// 2. With a boolean as the argument
console.log(reverseJsonArr(true));

// 3. With an Array (non-stringified) as the argument
console.log(reverseJsonArr(["x", "y", "z"]));

// 4. With a string argument that is not properly formatted JSON
console.log(reverseJsonArr('not { properly ][ formatted }'));

// 5. With a stringified-array that only has one value
console.log(reverseJsonArr('["x"]'));

// 6. With a stringified-array that is empty
console.log(reverseJsonArr('[]'));

// 7. With a stringified-array that has an even-number of values
console.log(reverseJsonArr('["x", "y"]'));

// 8. With a stringified-array that has an odd-number of values
console.log(reverseJsonArr('["1", "2", "3", "4", "5"]'));