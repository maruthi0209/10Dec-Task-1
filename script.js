// Question 1
/**
 * How would you define a function that takes two numbers as parameters and returns their sum?
 */
function sumOfTwoNumbers(number1, number2) {
    return (number1 + number2);
}


// Question 2
/**
 * If you define a function that accepts a string as a parameter, how would you modify it to print the string in uppercase?
 */
function stringUpper(myString) {
    console.log(myString.toUpperCase());
}


// Question 3
/**
 * In JavaScript, what happens if you pass an undefined value as an argument to a function that expects a parameter?
 */
function myFunction(myParam) {
    console.log(myParam);
    // Answer : Here I have not passed any argument when calling the function myFunction. 
    // The value of myParam is showing as undefined in console.
}
myFunction();


// Question 4
/**
 * Suppose you have a function that takes an array as a parameter. How would you check inside the function if the array is empty?
 */
function acceptArray(myArray) {
    if (myArray.length >= 0) {
        console.log("The array is not empty.");
    } else if (myArray.length == 0) {
        console.log("The array is empty.");
    } else {
        console.log("Invalid data.");
    }
}


// Question 5
/**
 * write a function that takes two numbers as parameters and returns their difference.
 */
function numberDifference(number1, number2) {
    return number1 - number2;
}


// Question 6
/**
 * Define a function that accepts a name and age as parameters, and returns a string with a greeting like "Hello, [name]! You are [age] years old."
 */
function myGreeting(name, age) {
    return `Hello, ${name}!, You are ${age} years old.`;
}


// Question 7
/**
 * Write a function that takes a number as a parameter and returns true if the number is a even number, otherwise false.
 */
function checkIfEven(param) {
    if (param % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

