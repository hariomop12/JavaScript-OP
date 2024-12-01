// const user = {
//   name: "hariom",
//   price: 199,

//   welcomeMassage: function () {
//     console.log(`Welcome ${this.name} to our website`);
//     console.log(this);
//   },
// };

// user.welcomeMassage();
// user.name = "n";
// user.welcomeMassage();

// console.log(this);

// function chai(){ // we cant use this in arrow function
//     let username = "hariom"
//     console.log(this.username);
// }

// chai(); // window object

// const chai = function () => {
//     let username = "hariom"
//     console.log(this.username);
// }

// chai(); // undefined

// const chai = () => {
//     let username = "hariom"
//     console.log(this.username);
// }

// chai(); // undefined

// const addtwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addtwo(1, 2)); // 3

// curly braces required return statement
// single line arrow function is not required return statement

const addtwo = (num1, num2) => num1 + num2; // single line arrow function return statement

console.log(addtwo(1, 2)); // 3

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach();

// //