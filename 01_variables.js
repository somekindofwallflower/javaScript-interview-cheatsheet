"use strict";

// Variables are the building blocks in javaScript, there are three ways of declaring a variables in js var, let const

// What is the difference between var, let and const?

// 1) Var can be redeclared
var a = 3;
var a = 4;

console.log(a); // The result is going to be 4 since with var we can redeclare and update dhe value

// 2) Let can not be redeclared

let a = 3;
let b = 4; // This gives an Error syntax as let variables can not be redeclared
b = 4; // This is going to work since variables with let can not be resigned, but they can be updated

const c = 3
const c = 4; // Error syntax as const can not be redeclared or updated

// const d; // This will also through an error - variables declared with const must be assigned at the moment of declaration
