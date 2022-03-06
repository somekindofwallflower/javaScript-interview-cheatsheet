// 1. Write a JavaScript function to check whether an `input` is an array or not.
function is_array(input) {
    return Array.isArray(input);
}
console.log("Exercise number 1");
console.log(is_array('somekindofwallflower'));
console.log(is_array([1, 2, 4, 0]));


// 2. Write a JavaScript function to clone an array.

const array_Clone = function(arr) {
    return [...arr];
}
console.log("Exercise number 2");
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

// 3. Write a JavaScript function to get the first element of an array.
// Passing a parameter 'n' will return the first 'n' elements of the array.

const first = (arr, n = 1) => {
  return arr.slice(0, n);
}

console.log("Exercise number 3");
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));


// 4 Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

const last = (arr, n = 1) => {
    return arr.length < n ? arr : arr.slice(arr.length - n, arr.length);
}

console.log("Exercise number 4");
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));


// 5. Write a simple JavaScript program to join all elements of the following array into a string.

const joinArrayElements = (arr, concatString = ",") => {
    return arr.join(concatString);
}

myColor = ["Red", "Green", "White", "Black"];
console.log("Exercise number 5");
console.log(joinArrayElements(myColor));
console.log(joinArrayElements(myColor, "+"));
