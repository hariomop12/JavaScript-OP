// we hav e 2 ways to create an object
// 1. Object literal (Not singleton) const JsUser = { }
// 2. Object constructor  (singleton)   const JsUser = new Object()

// 1. Object literal (Not singleton)

const mySym = Symbol("key1");

const JsUser = {
  name: "Hariom",
  [mySym]: "mykey1",
  age: 25,
  "Dost Pushpak": "Me",
  location: "Jaipur",
  email: "hariom@swiggy.com",
  isLoggedIn: false,
  lastLoginDay: ["Monday", "Saturday"],
};

// myArray = ["Hariom", 25, true];
// console.log(myArray);
// console.log(myArray[0]);
// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["Dost Pushpak"]);
// console.log(JsUser["mySym"]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "Hariom@aaditi.com";
// Object.freeze(JsUser);
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS User");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS User,${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
