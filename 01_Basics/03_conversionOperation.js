let score = "Hariom";

//console.log(typeof score); // string
//console.log(typeof(score)); // string

let valueInNumber = Number(score);
//console.log(typeof valueInNumber); // number
//console.log(valueInNumber); // NaN

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hariom";

let booleanIsLoggedIn = Boolean(isLoggedIn);
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Hariom" => true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ===================OPERATIONS=================

// let value = 3
// let negValue = -value
// console.log(negValue);
// console.log(3 + 3); // 6

// console.log(2+2); // 4
// console.log(2-2);    // 0
// console.log(2*2);    // 4
// console.log(2**3);   // 8
// console.log(2/3);    // 0.6666666666666666
// console.log(2%3);    // 2

// let str = "Hariom"
// let str2 = "OP"
// let str3 = str + " " + str2
// console.log(str3); // Hariom OP

console.log("1" + 2); // 12 // string
console.log(1 + "2"); // 12 // string

console.log(1 + 2 + "3"); // 33 // string
console.log("1" + 2 + 3); // 123 // string



let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1, num2, num3); // 4 4 4


let gameCounter = 100;
gameCounter = gameCounter + 1;
console.log(gameCounter); // 101

gameCounter++;
console.log(gameCounter); // 102

gameCounter--;
console.log(gameCounter); // 103