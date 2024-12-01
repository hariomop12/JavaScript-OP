// function sayMyName(){
//     console.log("My name is 007");
//     console.log("My name is 007");
//     console.log("My name is 007");
//     console.log("My name is 007");
//     console.log("My name is 007");
//     console.log("My name is 007");
//     console.log("My name is 007");
//     console.log("My name is 007");
// }

// sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

// function loginUserMassage(username) {
//   if (!username) {
//     throw new Error("Username is required");
//   }
//   return `Welcome ${username} just logged in`;
// }

// const loginMessage = loginUserMassage("007");
// console.log(loginMessage);

// function calculateCardPrice(...num1){
//     return num1 
// }

// const cardPrice = calculateCardPrice(100, 200, 300, 400);
// console.log(cardPrice);


const username = {
    username : "007",
    password : "123"
}


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

// const user = {
//     username: "Hariom",
//     prices: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[3]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

