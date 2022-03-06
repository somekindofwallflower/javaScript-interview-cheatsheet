/**
 * Task description: Write a method that creates a new array with given values
 * Expected Result: (3, 'a') => ['a', 'a', 'a']
 * Task Complexity: 1 of 5
 * @param {number} arraySize - size of array
 * @param {?} value - value to fill
 * @returns {Array}
 */


const fill = (arraySize, value) => {
   return new Array(arraySize).fill(value);
}

console.log(fill(3, "test"));



/**
 * Task description: Write a method that reverts input array
 * Expected Result: [1, 2, 3] => [3, 2, 1]
 * Task Complexity: 1 of 5
 * @param {Array} array - Array of any elements
 * @returns {Array}
 */

/*
// Solution nr 1
const reverse = (arr) => {
    return arr.reverse();
}
*/

/*

// Solution nr 2
 const reverse = (arr) => {
     const reversed = [];
     for(let i = arr.length - 1; i >= 0; i--) {
         reversed.push(arr[i])
     }
     return reversed;
 }
;*/

// Solution nr 3
const reverse = (arr) => {
    return arr.map((el, index, givenArr) => givenArr[givenArr.length - index - 1]);
}

console.log(reverse([1, 2, 3]))

/**
 * Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null
 * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
 * Task Complexity: 1 of 5
 * @param {Array} array - An array of any elements
 * @returns {Array}
 */

const clearsArr = (arr) => {
 return arr.filter(el => el)
}

console.log(clearsArr([0, 1, false, 2, undefined, '', 3, null]))

/**
 * Task description: Write a method that returns an object composed of key-value pairs.
 * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
 * Task Complexity: 2 of 5
 * @param {Array} array - a deep array of pairs
 * @returns {Array}
 */

const fromPairs = (array) => {
   return array.reduce((acc, value) => {
      if(Array.isArray(value)) {
          acc[value[0]] = value[1];
      }
      return acc;
    }, {})
}

const data = [['a', 1], ['b', 2]];
console.log(fromPairs(data)) // { 'a': 1, 'b': 2 }
/**
 * Task description: Write a method that returns an array without listed values
 * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]
 * Task Complexity: 2 of 5
 * @param {Array} array - Array of primitive data types
 * @param {?} args list of values to remove
 * @returns {Array}
 */

const without = (arr, ...args) => {
    let filtered = [...arr];
    for (let arg of args) {
        filtered = filtered.filter(el => el !== arg);
    }
    return filtered
}

const dataWithout = [1, 2, 3, 1, 2];
console.log(without(dataWithout, 1, 2)); // [3]
/**
 * Task description: Write a method that returns a duplicate-free array
 * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]
 * Task Complexity: 2 of 5
 * @param {Array<string | number>} array - Array of primitive data types
 * @returns {Array}
 */

const unique = (arr) => {
    return Array.from(new Set(arr));
}

const dataUnique = [1, 2, 1, 2, 3];
console.log(unique(dataUnique)); // [1, 2, 3]
/**
 * Task description: Write a method that makes a shallow compare of two arrays and returns true if they are identical.
 * Expected Result: ([1, 2, 3], [1, 2, 3]) => true
 * Task Complexity: 2 of 5
 * @param {Array} firstArray - Array of primitive data types
 * @param {Array} secondArray - Array of primitive data types
 * @returns {boolean}
 */

const isEqual = (firstArray, secondArray) => {
    if(firstArray.length !== secondArray.length) {
        return false;
    }

    const compared = firstArray.map((el, index) => el === secondArray[index])
    return !compared.includes(false);
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false


/**
 * Task description: Write a method that turns a deep array into a plain array
 * Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
 * Task complexity: 3 of 5
 * @param {Array} array - A deep array
 * @returns {Array}
 */

const flatten = (arr) => {
    return arr.reduce((acc, value) => acc.concat(Array.isArray(value) ? flatten(value) : value), [])
}

const dataFlatten = [1, 2, [3, 4, [5]]];
console.log(flatten(dataFlatten)); // [1, 2, 3, 4, 5]


/**
 * Task description: Write a method that splits an array into parts of determined size
 * Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 * Task complexity: 3 of 5
 * @param {Array} array - An array of any elements
 * @param {number} size - size of chunks
 * @returns {Array}
 */

const chunk = (arr, size) => {
    const chunkedArr = [];
    let index = 0
    while (index < arr.length) {
        chunkedArr.push(arr.slice(index, index + size));
        index += size;
    }
    return chunkedArr;
}

const dataChunk = [1, 2, 3, 4, 5, 6, 7];
console.log(chunk(dataChunk, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
console.log(chunk(dataChunk, 3)) // [[1, 2, 3], [4, 5, 6], [7]]

/**
 * Task description: Write a method that creates an array of unique values that are included in all given arrays
 * Expected Result: ([1, 2], [2, 3]) => [2]
 * Task complexity: 4 of 5
 * @param {?} arrays - Arrays of primitive data types
 * @returns {Array}
 */


const intersection = (...arrays) => {
    const result = arrays[0].filter((element) => {
        const indexOfElement = arrays[1].indexOf(element)
        if(indexOfElement >= 0) {
            return element;
        }
    })

    if(arrays.length > 2) {
        intersection(result, ...arrays.slice(2, arrays.length));
    }

    return Array.from(new Set(result));
}

const arr1I = [1, 2];
const arr2I  = [2, 3];
const arr3I = ['a', 'b'];
const arr4I = ['b', 'c'];
const arr5I = ['b', 'e', 'c'];
const arr6I = ['b', 'b', 'e'];
const arr7I = ['b', 'c', 'e'];
const arr8I = ['b', 'e', 'c'];
console.log(intersection(arr1I, arr2I)) // [2]
console.log(intersection(arr3I, arr4I, arr5I)) // ['b']
console.log(intersection(arr6I, arr7I, arr8I)) // ['b', 'e']
