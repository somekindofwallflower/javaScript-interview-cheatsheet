
// --------------- EXERCISE 1 --------------

// Write a function which can concatenate 2 arrays. If only one array is passed it will duplicate it

const dublicateArray = (arr) => {
    // Solution 1
    // return arr.concat(...arr);
    // Solution 2
    // return [...arr, ...arr];
    // Solution 3
    return arr.push(...arr);
}

const test = [1, 2, 3];
console.log(dublicateArray(test));


// ---------------- EXERCISE 2 -------------

// Write a program to replace 3 center elements of the 1st array by center 3 elements of the 2nd array

function replaceThreeCenterElements(arr1, arr2) {
    const startPositionArray1 = arr1.length/2 - 1;
    const startPositionArray2 = arr2.length/2 - 1;
    return arr1.splice(startPositionArray1, 3, ...arr2.slice(startPositionArray2, startPositionArray2 + 3));
}

console.log(replaceThreeCenterElements([1, 2, 3, 4, 5], [4, 0, 0, 0, 8]));


// ------------------ EXERCISE 3 -------------------

// Sort the given array of integers in ascending or descending order

const sortArray = (arr) => {
    // return arr.sort((a, b) => a - b); //ascending
    return arr.sort((a, b) => b - a); //descending
}

console.log("Sort arr", sortArray([3, 6, 3, 2, 6, 7, 9, 7]));

// ----------------- EXERCISE 4 ----------------
// Sort the given array of objects in ascending order according the authors lastname

// Example
const books = [
    { name: "Harry Potter", author: "Joanne Rowling" },
    { name: "Warcross", author: "Marie Lu" },
    { name: "The Hunger Games", author: "Suzanne Collins" },
]

const orderArrayOfObjects = (books) => {
    return books.sort((book1, book2) => {
        const authorLastName1 = book1.author.split(" ")[1];
        const authorLastName2 = book2.author.split(" ")[1];
        return authorLastName2 > authorLastName1 ? -1 : 1;
    });
}

console.log(orderArrayOfObjects(books));


// ------------ EXERCISE 5 --------------

// Square all the positive numbers of the array and return the output array

const squarePositiveNumbers = (arr) => {
    return arr.filter((el) => el > 0).map(el => Math.pow(el, 2));
}

console.log(squarePositiveNumbers([1, -7, 9, 15]));

// ------------------- EXERCISE 6 ------------------
// Write a code to generate an array with range of numbers and shuffle them

// An array of numbers in the range can be generated from a function which can take start and end value of the range
// The shuffling can be achieved simply by sorting the array using a function which randomly returns positive or negative numbers
// The shuffling of the values can be also done by picking a value from a random index from the current array and moving it in to a new array

function rangeGenFunc(start = 1, end = 0) {
    const arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

const arr = rangeGenFunc(1, 10);                    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.sort(() => 0.5 - Math.random());                // [6, 8, 5, 10, 4, 3, 9, 2, 7, 1]


// ---------------- EXERCISE 7 --------------
// Check if the user with the name "John" exists in the array of objects

const existJohn = (arr) => {
   return  arr.some((el) => {
        return el.name === "John"
    })
}

console.log(existJohn([{name: "Marry"}, {name: "John"}]));

// -------------- EXERCISE 8 ------------------
// Generate an array of objects with properties id and full name from an array of objects where each object will have id, firstname and lastname

const generateArray = (arr) => arr.map((obj) => { return { id: obj.id, fullName: obj.firstName + " " + obj.lastName } });

console.log(generateArray([{id: 1, firstName: "Somekindof", lastName: "Wallflower"}]));

// ---------- EXERCISE 9 ------------
// Write a program to calculate the sum of all the values of an array

const calculateSum = (arr) => {
   return arr.reduce((acc, val) => {
        return acc + val;
    }, 0)
}

console.log(calculateSum([1,2, 3, 4, 5]));

// ----------- EXERCISE 10 --------------

// Get the maximum value from a numbers array along with its index
const getMaxAndIndex = (arr) => {
    const max = Math.max(...arr);
    return {max: max, index: arr.indexOf(max)}
}

console.log(getMaxAndIndex([1, 5, 3, 8, 4]));

// ------------ EXERCISE 11 -------------
// Find the number of occurences of minimum value in the numbers list

const accMin = (arr) => {
    const minValue = Math.min(...arr);
    return arr.filter(a => a === minValue).length;
}

console.log(accMin([2, 3, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1]));


// ----------------------- EXERCISE 12 ----------------------
// Create an array of length n with all the values of it set to 10

const fillArray10 = (n) => {
    const arr = new Array(n);
    return arr.fill(10);
}

console.log(fillArray10(5));

// -------------- EXERCISE 13 -----------------
// Write the code to remove the duplicates from the array

const removeDuplicates = (arr) => {
    const set = new Set(arr);
    const distinctArr = [...set];
    return distinctArr;
}

console.log(removeDuplicates([3, 4, 3, 3, 4]));

// ------------EXERCISE 14 ------------------
// Design a flat function which flattens an array to any depth

const flat = (arr) => {
    const flatArr = [];
    arr.forEach((value) => {
        if(Array.isArray(value)){
            flatArr.push(...flat(value));
        }
        else{
            flatArr.push(value);
        }
    });
    return flatArr;
}


console.log("[[1, 2], [3, 4], [5]]", flat([[1, 2], [3, 4], [5]]));

// -------------- EXERCISE 15 --------------
// Check if all the students of have passed or not (40 is the pass marks)

const hasPass = (students) => {
   return  students.every((student) => student.marks >= 40);
}

console.log(hasPass([{marks: 45}, {marks: 39}]))

// ----------------- EXERCISE 16 -------------
// Get the average of all the salaries which is greater than 10000 from the department of "IT" from the array of objects)

const avgSalaries = (arr) => {
    const result = arr.filter(el => el.department === "IT" && el.salary > 1000);
    const sum = result.reduce((acc, el) => acc + el.salary, 0);
    return sum / result.length;
}

console.log(avgSalaries([{department: "IT", salary: 5000}, {department: "IT", salary: 6000}]))


// -------------- EXERCISE 17 --------------

// Extract the list of all the elements from the list of numbers given in 2 arrays

const extractArr = (arr1, arr2) => {
    const res1 = new Set(arr1);
    const res2 = new Set(arr2);
    return [...res1, ...res2];
}

console.log(extractArr([1, 3, 2, 2, 3, 2, 2, 2], [5, 5, 6, 5, 4, 2]))
