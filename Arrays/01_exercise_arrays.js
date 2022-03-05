// Write a JavaScript function to check whether an `input` is an array or not.


function is_array(input) {
    return Array.isArray(input);
}

console.log(is_array('somekindofwallflower'));
console.log(is_array([1, 2, 4, 0]));
