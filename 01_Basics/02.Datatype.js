"use strict"; // use strict mode is for better coding practice

// alert(3+3)
// we are using node JS and Browser alert is not supported in node JS

console.log(3 + 3); // 6;

// Data Types

// JavaScript is a dynamically typed language. That means you don't have to specify the data type of a variable when you declare it. JavaScript automatically converts the variable to the correct data type.

// string
let name = "John";
// number
let age = 25;
// bigint
let bigInt = 1234567890123456789012345678901234567890n;
// boolean --> true / false
let isTrue = true;
// null
let nullValue = null; // null is a special value that represents "nothing", "empty" or "value unknown".
// undefined
let undefinedValue = undefined; // undefined is a type itself (undefined) with a single value undefined.
// symbol ==>(unique) A value having the data type Symbol can be referred to as a symbol value.
let symbolValue = Symbol("id"); // Symbols are unique identifiers.


console.table([typeof nullValue, typeof undefinedValue, typeof symbolValue]);

// null is an object 
// undefined is undefined



