"use strict";

// Arrays are one way of storing values

let a = 4;
const b = 5;
var c = "Hello";

const array = [a, b, c];
console.log(array);


// ---------- JavaScript array methods ------------

// --------- Map array method ----------
// Map creates a new copy of the original array
// We use map when we want to so something with the element of the original array, but we do not want to change it
// Map iterates through the original array and takes a callback function as an argument. In the call back function we tell what we want to do with the elements


const testArray = [1, 2, 3, 4, 5];

// Create a new array which multiplies every element by 2
const testArrayMultipliedByTwo = testArray.map((el) => el * 2);
console.log(testArrayMultipliedByTwo); // [2, 4, 6, 8, 10]


// --------------- Filter array method ----------------
// Filter returns a new array with the elements that meet the given condition(S)


// Return the words with more than 6 letters
const words = ['react', 'script', 'interview', 'style', 'javascript']

const wordsWithMoreThanSixCharacters = words.filter((word) => word.length > 6);
console.log(wordsWithMoreThanSixCharacters);


// -------------- forEach array method ----------

// For Each is very similar to map but with two key differences
// 1 - ForEach does not return a new array but map does
// 2. We can do method chaining in map but not in forEach
// Note: map and forEach don't mutate (change) the original array.


// Return an array where even numbers are multiplied by 2

let arr = [1, 2, 3, 4, 5, 6, 7]


function consoleEven(arr) {
    const newArr =  arr.map(el => {return el % 2 === 0 ? el * 2 : el})
    console.log(newArr);
    return newArr;
}

consoleEven(arr);

function consoleEven(arr) {
    let data = arr.forEach((num) => (num % 2 === 0 ? num * 2 : num * 1))
    console.log(data) // undefined
}

consoleEven(arr);


// Convert  the new array back to original

function consoleEven(arr) {
    let data = arr
        .map((num) => (num % 2 === 0 ? num * 2 : num * 1))
        .map((item) => (item % 2 === 0 ? item / 2 : item / 1))

    console.log(data)
}

consoleEven(arr);

// -------------- Reduce array method --------
// Reduce takes as a parameter a function and an initial value

const arrT = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrT.reduce(getSum, 0));

function getSum(total, num) {
    return total + num;
}


// --------- Concat array method --------------

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];
console.log(arr1.concat(arr2));


// ----------------- Find array method ---------

const arrF = [1, 2, 3, 4, 5];
const greaterThanThree = (num) => {
    return num > 3
}

// Returns the first value that please the condition;
console.log(arrF.find(greaterThanThree));
