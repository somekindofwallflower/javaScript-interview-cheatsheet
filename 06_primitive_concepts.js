"use strict";

// Show the usage of typeof operator on different types of values

//Arrays and functions are sub type of objects
console.log("--------Exercise 1------------")
console.log(typeof 50); //number
console.log(typeof "text"); //string
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof function(){}); //function
console.log(typeof 10n); //bigint
console.log(typeof Symbol()); //symbol
console.log(typeof [1, 2]); //object
console.log(typeof {}); //object

console.log(typeof NaN); //number
console.log(typeof undeclaredVar); //undefined
console.log(typeof Infinity); //number
console.log(typeof null); //object
console.log(typeof /regex/); //object


// Show the different ways of concatenating numbers and strings

console.log("--------Exercise 2------------");

// Numbers and Strings
console.log(1 + '2'); //12
console.log(1 + 2 + '3'); //33
console.log(1 + 2 + '3' + '4'); //334
console.log(1 + 'One'); // 1One


// Strings and numbers
console.log('1' + 2); //12
console.log('1' + '2' + 3); //123
console.log('1' + '2' + 3 + 4); //1224
console.log('1' + '2' + (3 + 4)); //127
console.log('One' + 1); //One1

// Mix of Strings and numbers
console.log(1 + 2 + '3' + '4' + 5 + 6); // 33456
console.log(1 + 2 + '3' + '4' + (5 + 6)); // 33411
console.log('1' + '2' + (3 + 4) + 5 + '6'); // 12756


// Show the conversion from number to string and vice versa
console.log("--------Exercise 3------------")

// Number to String
const numb = 12;
console.log(numb.toString());
console.log(String(numb));
console.log(numb + "");


// String to number
// If the number is floating, parseFloat can be used. parseInt and parseFloat are the methods present on the Number object also
const stringNumb = "12";
console.log(Number(stringNumb));
console.log(+stringNumb);
console.log(parseInt(stringNumb));


//Write a code to operate on integer numbers outside the range of numbers in JavaScript
//The big integers cannot be operated directly with normal number datatype. 10n + 20 is not allowed
console.log("--------Exercise 4------------")
// assignment of big integers
const bigNum1 = 1526688934595n, bigNum2 = 256489246848n, num3 = 1562365;

const bigSum = bigNum1 + bigNum2;
const bigDiff = bigNum1 - bigNum2;
const total = bigNum1 + bigNum2 + BigInt(num3);
console.log("bigSum", bigSum);
console.log("bigDiff", bigDiff);
console.log("total", total);


/*
Show the usage of ||, &&, ?? and !! with code examples
The logical OR (||) operator for a set of operands is true if and only if one or more of its operands is true
The logical AND (&&) operator for a set of operands is true if and only if all of its operands are true
The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand
The double NOT (!!) operator used to explicitly force the conversion of any value to the corresponding boolean primitive*/

console.log("--------Exercise 5------------")

const num1 = 10, num2 = 20;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
console.log(true || false); // true
console.log(false || false); // false
console.log(false || num1); // 10
console.log(0 || num2); // 20
console.log("text" || true); // "text"

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
console.log(true && true);  // true
console.log(true && false); // false
console.log(true && num1); // 10
console.log("text" && (num1 + num2)); // 30
console.log(num1 > 0 && num2 < 0); // false

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
console.log(undefined ?? 10); // 10
console.log(null ?? 20); // 20
console.log(false ?? num1); // false
console.log(0 ?? num2); // 0

// https://developer.cdn.mozilla.net/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
console.log(!!10); // true
console.log(!!{}); // true
console.log(!!""); // false
console.log(!!0); // false




// Show the frequently and commonly used methods available on Number object with coding examples
console.log("--------Exercise 6------------")

/*
isInteger is used to check if the given number is integer or not
parseInt is used to convert a given value in to integer
parseFloat is used to convert a given value in to floating number
isNaN is used to check if the given value is NaN or no
toFixed is used to limit the number of digits after the decimal place
toPrecision is used to limit the total number of digits to represent the number*/


console.log(Number.isInteger(1.5)); //false
console.log(Number.isInteger(-15)); //true

console.log(Number.parseInt("5.8")); // 5
console.log(Number.parseInt("123x")); // 123

console.log(Number.parseFloat("5.86")); // 5.86
console.log(Number.parseFloat("-12.69x")); // -12.69

console.log(Number.isNaN(NaN)); //true
console.log(Number.isNaN("text" - 10)); //true
console.log(Number.isNaN("text")); //false

console.log(56.369.toFixed(2)); // 56.37
console.log(59..toFixed(3));                   // 59.000

console.log(32.458.toPrecision('3'));          // 32.5
console.log(98.1.toPrecision(1));              // 9e+1


// Write the polyfill for Number.isNaN

console.log("--------Exercise 7------------")

Number.isNaN = Number.isNaN || function isNaN(input) {
    return typeof input === 'number' && input !== input;
}



/*
Show the frequently and commonly used methods available on Math object with coding examples
1- abs is used to get the absolute value of the given number
2- floor is used to get the greatest integer smaller than or equal to the given number
3- ceil is used to get the smallest integer greater than or equal to the given number
4- round is used to round the given number to the nearest integer.
5- max is used to get the largest of zero or more numbers
6- min is used to get the smallest of zero or more numbers
7- sqrt is used to calculate the square root of the given number
8- pow is used to calculate the power base on inputs
9- trunc is used to limit the total number of digits to represent the number (method is present on prototype of Number)
*/


console.log(Math.abs(-5)); // 5
console.log(Math.floor(1.6)); // 1
console.log(Math.ceil(2.4)); // 3
console.log(Math.max(-4, 5, 6)); // 6
console.log(Math.min(-7, -2, 3)); // -7
console.log(Math.sqrt(64)); //8
console.log(Math.pow(5, 3)); // 125
console.log(Math.trunc(-6,3)); // 6


// How can we solve the problem of comparision of 0.1 + 0.2 with 0.3 where === operator fails
console.log(" ----------- Exercise 9 --------------")
 console.log(0.1 + 0.2 - 0.3 < Number.EPSILON);


// Write a code to iterate over a string
console.log(" ----------- Exercise 10 --------------")

const text = "Hello there";

// Solution 1
for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}


// Solution 2
for(let i = 0; i < text.length; i++) {
    console.log(text.charAt(i));
}

// Solution 3
for(let char of text) {
    console.log(char);
}

// Solution 4
[...text].forEach(char => console.log(char));

// Show the usage of template literals with expression interpolation and tagged templates
console.log(" ----------- Exercise 11 --------------")

const num1T = 10; const num2T = 20;
console.log(`The sum of ${num1T} and ${num2T} is ${num1T + num2T}`);


// Write a code to show the working of try...catch...finally
console.log(" ----------- Exercise 12--------------")

// try {
//     callAPI();
// } catch(error) {
//     throw new Error(error);
// } finally {
//     console.log("I will execute no matter what happens to the try/catch");
// }


// Show the creation and usage of symbol with code
console.log(" ----------- Exercise 13--------------");

// Create a new symbol

const symId = Symbol("id");
console.log("symId", symId);
const symUsername = Symbol.for("username");
console.log(Symbol.keyFor(symUsername));
