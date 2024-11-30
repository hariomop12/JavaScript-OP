// 2 type of memory in javascript : stack memory(Primitive)(we get Copy) and heap memory (Non-Primitive) (we get Reference)


// let MyName = "Hariom"; // stake memory 
// let MyName2 = MyName; // stake memory // you change its value not real value
// MyName2 = "Hariom2"; // stake memory

// console.log(MyName); // Hariom
// console.log(MyName2); // Hariom2


let user = {    
    name: "Hariom",
    age: 33
};

let user2 = user; // reference of memory // heap memory
user2.name = "Hariom2"; // reference of memory // heap memory

console.log(user); // { name: 'Hariom2', age: 33 }