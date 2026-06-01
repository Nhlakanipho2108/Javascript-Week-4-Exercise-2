// TODO 1: Sum all numbers from 0 to the parameter
function sum(num) {

    // Check if value is a number and an integer
    if (typeof num !== "number" || num % 1 !== 0) {
        return "The value passed is not a number";
    }

    let total = 0;

    for (let i = 0; i <= num; i++) {
        total += i;
    }

    return total;
}

// Tests
console.log(sum(5));      // 15
console.log(sum(10));     // 55
console.log(sum("5"));    // The value passed is not a number
console.log(sum(3.5));    // The value passed is not a number



// TODO 2: Factorial function
function factorial(num) {

    let result = 1;

    for (let i = num; i >= 1; i--) {
        result *= i;
    }

    console.log(result);
}

// Tests
factorial(4); // 24
factorial(5); // 120



// TODO 3: funkyMath function
function funkyMath() {

    if (arguments.length === 2) {
        return arguments[1] - arguments[0];
    }

    if (arguments.length === 3) {
        return arguments[0] + arguments[1] + arguments[2];
    }

    if (arguments.length === 4) {
        let firstPair = arguments[0] + arguments[1];
        let secondPair = arguments[2] + arguments[3];
        return firstPair / secondPair;
    }

    return "Invalid number of arguments";
}

// Tests
console.log(funkyMath(5, 10));      // 5
console.log(funkyMath(1, 2, 3));    // 6
console.log(funkyMath(8, 2, 3, 5)); // 1.25



// TODO 4: Remove odd numbers into a new array
let numbers = [1, 2, 33, 45, 6, 44];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 !== 0) {
        oddNumbers.push(numbers[i]);
    }
}

// Sort from smallest to biggest
oddNumbers.sort(function(a, b) {
    return a - b;
});

console.log("Odd Numbers:", oddNumbers); // [1, 33, 45]



// TODO 5: Create object called me
let me = {
    firstName: "Nhlakanipho",
    lastName: "Luthuli",
    age: 25,
    favouriteColour: "Blue",
    dreamCar: "BMW M4"
};

console.log(me);



// TODO 6: Add favourite food
me.favouriteFood = "Pizza";

console.log(me);



// TODO 7: Delete age property
delete me.age;

console.log(me);
