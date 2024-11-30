const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Hariom";
tinderUser.isLoggedIn = false;
tinderUser.location = "Jaipur";
tinderUser.age = 25;
tinderUser.email = "";

// console.log(tinderUser);

const regularUser = {
  email: "some@some.com",
  isLoggedIn: false,
  fullname: {
    usernamefull: {
      firstname: "Hariom",
      lastname: "Additi",
    },
  },
};

// console.log(regularUser.fullname?.usernamefull.lastname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2 , obj4);
// console.log(obj3);

// const obj3 = {...obj1, ...obj2}
// console.log(obj3); 

// ... is spread operator in JS which is used to merge 2 objects or arrays or strings or any iterable object


const users = [
    {
        name: "Hariom",
        age: 25,
        email: ""
    },
    {
        name: "Pushpak",
        age: 26,
        email: ""
    },
    {
        name: "Aaditi",
        age: 25,
        email: ""
    },
    {
        name: "Sakshi",
        age: 25,
        email: ""
    },
]


users[1].email
// console.log(tinderUser);

console.log(Object.keys(tinderUser));   // returns an array of keys ()
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name"));