// const user = {
//     username: "John",
//     loginCount : 32,
//     signIn: true,
//     age: 25,
//     getUserDetails: function () {
//         console.log("Username is: " + this.username + ", Age is: " + this.age);
//     },
//     greet: function () {
//         console.log("Hello, I am " + this.username);
//     },
// }

// console.log(user.username);

// const promise1 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "John", age: 25 });
//   }, 1000);
// });

function User(username, loginCount, isLogedin) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLogedin = isLogedin;
  this.getUserDetails = function () {
    console.log(
      "Username is: " + this.username + ", Login count is: " + this.loginCount
    );
    return this;
  };
}

// this is a constructor function (one object that holds all the properties and methods, vlues)


const userOne = new  User("John", 32, true);
console.log(userOne.getUserDetails());

// new keyword creates a new object and binds it to the this keyword
// constructor function is called with the new keyword
// this keyword injects the properties and methods to the new object
// new object is returned from the constructor function