// var c = 300
// let a = 100;
// if (true) {
//   let a = 10;
//   const b = 20;
//   console.log("Inside the block", a);
// }

// // console.log(a);
// // console.log(b);
// console.log(a);

// function one() {
//   const name = "Hariom";
//   function two() {
//     const IDE = "VS Code";
//     console.log(name);
//   }
//   two();
//   //   console.log(IDE);
// }
// one();

// if (true) {
//   const username = "Hariom";
//   if (username === "Hariom") {
//     const website = "Hariom.com";
//     console.log("Inside the block", username + " " + website);
//   }
//    console.log(website);
// }

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addOne(1)); // we can access function before declaration in function declaration
function addOne(num) {
  // function declaration
  return num + 1;
}

addOne(1);
// console.log(addTwo(1)); // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
  // function expression
  return num + 2;
};

addTwo(1);
console.log(addTwo(1));
