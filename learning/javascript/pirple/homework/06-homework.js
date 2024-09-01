for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    // extra credit
    else if (((i % 2 != 0) & (i % 7 != 0) & (i != 1)) || (i == 2) || (i == 7)) {
        console.log("Prime");
    }
    else { 
        console.log(i);
    }
}