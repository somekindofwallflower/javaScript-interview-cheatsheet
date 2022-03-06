// --------- EXERCISE 1 -------------

console.log("Ex1: Swap 2 integers present in variables num1 and num2 without using temporary variable");

let num1 = 10, num2 = 20;
[num1, num2] = [num2, num1];
console.log(`${[num1, num2]} ${[num2, num1] }`)


// --------- EXERCISE 2 -------------

console.log("Ex2: Write a function which returns true if given value of number is an integer without using any inbuilt functions");

let number = 10;

const isInt = (number) => {
    return number % 1 === 0;
}
console.log(isInt(number));
console.log(isInt("text"));


// --------- EXERCISE 3 -------------

console.log(" Ex3: Create a function which returns a random number in the given range of values both inclusive");

const rangeStart = 10;
const rangeEnd = 20;

function randomRangeNumber(rangeStart, rangeEnd) {
    return rangeStart + Math.round(Math.random() * (rangeEnd - rangeStart));
}

console.log(randomRangeNumber(rangeStart, rangeEnd));


// --------- EXERCISE 4 -------------

console.log("Ex4: Write a program to reverse a string");

const greeting = "Hello World";

const reverseString = (str) => {
    // Solution 1
    // return str.split("").reverse().join("");

    // Solution2
    let reverseString = "";
    for(let i = 0; i < str.length; i++) {
        reverseString = str.charAt(i) + reverseString;
    }
    return reverseString;
}
console.log(reverseString(greeting));


// --------- EXERCISE 5 -------------
console.log("Ex5: Write a program to reverse a string by words. Also show the reverse of each words in place");

const phrase = "Hello it's me!"
const reverseStringByWords = (phrase) => {
    return phrase.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}

console.log(reverseStringByWords(phrase));


// --------- EXERCISE 6 -------------

console.log("Ex6: Write a program to reverse a given integer number");

let num = 3849;
const reverseNumber = (num) => {
   return +String(num).split("").reverse().join("");
}

console.log(reverseNumber(num));

// --------- EXERCISE 7 -------------

console.log("Ex7: Write a code to replace all the spaces of the string with underscores");

const shortText = "Convert me to snakeCase";
const snake = (text) => {
    return text.replaceAll(" ", "_");
}

console.log(snake(shortText));

// --------- EXERCISE 8 -------------

console.log("Ex8: Write a function which can convert the time input given in 12 hours format to 24 hours format");

/*// Example
convertTo24HrsFormat("12:10AM");    // 00:10
convertTo24HrsFormat("5:00AM");     // 05:00
convertTo24HrsFormat("12:33PM");    // 12:33
convertTo24HrsFormat("01:59PM");    // 13:59
convertTo24HrsFormat("11:8PM");     // 23:08
convertTo24HrsFormat("10:02PM");    // 22:02*/

const convertTo24HrsFormat = (timeText) => {
    let timeTextLower = timeText.toLowerCase();
    let [hours, minutes] = timeTextLower.split(":");

    if(timeTextLower.endsWith("am")) {
        hours = hours == 12 ? "0" : hours;
    } else if(timeTextLower.endsWith("pm")) {
        hours = hours == 12 ? hours : String(+hours + 12);
    }
    return hours.padStart(2, 0) + ":" + minutes.slice(0, 2).padStart(2, 0);
}


console.log(convertTo24HrsFormat("12:10AM"));    // 00:10
console.log(convertTo24HrsFormat("5:00AM"));     // 05:00
console.log(convertTo24HrsFormat("12:33PM"));    // 12:33
console.log(convertTo24HrsFormat("01:59PM"));    // 13:59
console.log(convertTo24HrsFormat("11:8PM"));     // 23:08
console.log(convertTo24HrsFormat("10:02PM"));    // 22:02*/

// ------------- EXERCISE 9 --------------

console.log("Ex9: Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'");

const getTheGapX = (input) => {
    if(!input.includes("X")) {
        return -1;
    }
    const firstIndexOf = input.indexOf("X");
    const lastIndexOf = input.lastIndexOf("X");
    return firstIndexOf === lastIndexOf ? -1 : lastIndexOf - firstIndexOf
}


// Example
console.log(getTheGapX('XeroX'));                        // 4
console.log(getTheGapX('Xamarin'));                      // -1       (If there is only single character 'X')
console.log(getTheGapX('JavaScript'));                   // -1       (If there is no character 'X')
console.log(getTheGapX("F(X) !== G(X) !== F(X)"));       // 18


// --------------- EXERCISE 10 -----------

console.log("Ex10: Write a function to truncate a string to a certain number of letters\n");

const truncateString = (str, n) => {
    if(n < str.length) {
        return str.substring(0, n - 3).padEnd(n, ".");
    } else {
       return str;
    }
}
// Example
console.log(truncateString("JavaScript", 7)); // "Java..."
console.log(truncateString("JS is fun", 10)); // "JS is fun"
console.log(truncateString("JS is funny", 10)); // "JS is f..."


// -------------- EXERCISE 11 ---------------

console.log("Ex11: Write a code to truncate a string to a certain number of words");

const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3;
const result = str.split(" ").slice(0, wordLimit).join(" ");

console.log(result);

// ----------------- EXERCISE 12 --------------

console.log("Ex12: Create a regular expression to validate if the given input is valid Indian mobile number or not")

function validateMobile(str) {
    const regexMobile = /^(\+91|0)?\s?\d{10}$/;
    return regexMobile.test(str);
}

// Example
console.log(validateMobile('+919876543210'));                // true
console.log(validateMobile('+91 9876543210'));               // true
console.log(validateMobile('09876543210'));                  // true
console.log(validateMobile('9876543210'));                   // true
console.log(validateMobile('99876543210'));                  // false
