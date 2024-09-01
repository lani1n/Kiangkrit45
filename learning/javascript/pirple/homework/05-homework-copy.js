// copy of homework 5

const integer = (int) => !isNaN(int) && int >= 0;
const unitValid = ["second", "seconds", "minute", "minutes", "hour", "hours", "day", "days"];
const unitCheck = (unit) => unitValid.indexOf(unit) !== -1;
const minInSeconds = 60;
const hourInSeconds = 60 * minInSeconds;
const dayInSeconds = 24 * hourInSeconds;
const isUnitValid = (int, unit) => {
    switch(unit) {
        case "second":
        case "minute":
        case "hour":
        case "day":
            return (int === 1) ? true : false;
        case "seconds":
        case "minutes":
        case "hours":
        case "days":
            return (int != 1) ? true : false;
        default:
            return false;
    }
}
const convert2Seconds = (int, unit) => {
    switch(unit) {
        case "second":
        case "seconds":
            return int;
        case "minute":
        case "minutes":
            return int * minInSeconds;
        case "hour":    
        case "hours":
            return int * hourInSeconds;
        case "day":    
        case "days":
            return int * dayInSeconds;
        default:
            return false;
    }
}

const convert2Bigger = (seconds) => {
    if (seconds % dayInSeconds === 0) {
        const days = seconds / dayInSeconds;
        return (days === 1) ? [days, "day"] : [days, "days"];
    } else if (seconds % hourInSeconds === 0) {
        const hours = seconds / hourInSeconds;
        return (hours === 1) ? [hours, "hour"] : [hours, "hours"]
    } else if (seconds % minInSeconds === 0) {
        const minutes = seconds / minInSeconds;
        return (minutes === 1) ? [minutes, "minute"] : [minutes, "minutes"]
    } else {
        return (seconds === 1) ? [seconds, "second"] : [seconds, "seconds"]
    }
}

const timeAdder = (int1, unit1, int2, unit2) => {
    if (!integer(int1)) { return false; };
    if (!integer(int2)) { return false; };
    if (!unitCheck(unit1)) { return false; };
    if (!unitCheck(unit2)) { return false; };
    if (!isUnitValid(int1, unit1)) { return false; };
    if (!isUnitValid(int2, unit2)) { return false; };

    const unitInSeconds1 = convert2Seconds(int1, unit1);
    const unitInSeconds2 = convert2Seconds(int2, unit2);
    const unitInSecondsSum = unitInSeconds1 + unitInSeconds2;
    return convert2Bigger(unitInSecondsSum);
}

// given examples in instuction no. 4
console.log(timeAdder(5, "hour", 5, "minutes")); // This is impossible because "hour" is singular and 5 is plural
console.log(timeAdder(false, false, 5, "minutes")); // This is invalid because the first 2 arguments are not the correct types
console.log(timeAdder({}, "days", 5, "minutes")); // This is invalid because the first argument is the wrong type

// extra credit
console.log(timeAdder(20,"hours",4,"hours"));
console.log(timeAdder(20,"hours",5,"hours"));

// correct
console.log(timeAdder(1,"minute",5,"seconds"));
console.log(timeAdder(20,"minutes",5,"hours"));
console.log(timeAdder(1,"hour",75,"minutes"));
console.log(timeAdder(14,"hours",2,"days"));

// incorrect
console.log(timeAdder(5,"minute",1,"seconds"));
console.log(timeAdder(5,"minute",20,"hour"));
console.log(timeAdder(75,"hour",1,"minutes"));
console.log(timeAdder(2,"hour",14,"day"));