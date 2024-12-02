// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// promis are 3 states: pending, fulfilled, rejected
// fetch('https://jsonplaceholder.typicode.com/users').then().catch().finally()

const promise = new Promise(function (resolve, reject) {
  // do an async task and then
  // DB calls and Cryptography, network calls
  setTimeout(function () {
    // console.log("Async work complete");
    resolve();
  }, 1000);
});

// .then() is called when promise is resolved
// .catch() is called when promise is rejected
// .finally() is called when promise is settled
// .then() and .catch() can be chained

promise.then(function () {
  //   console.log("Task Complete");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log("Async work 2 complete");
    resolve();
  }, 1000);
}).then(function () {
  //   console.log("Task 2 resolved");
});

const promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "John", age: 25 });
  }, 1000);
});

promise1.then(function (user) {
  //   console.log(user);
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "John", age: 25 });
    } else {
      reject("Error occured");
    }
  }, 2000);
});

promise2
  .then(function (user) {
    // console.log(user);
    return user.username;
  })
  .then(function (username) {
    // console.log(username);
  })
  .catch(function (error) {
    // console.log(error);
  })
  .finally(function (user) {
    // console.log("the promis is eithe resolved or rejected");
  });

// Promise.all() takes an array of promises and resolves when all of them are resolved
const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Js", age: 10 });
    } else {
      reject("JS want wrong");
    }
  }, 1000);
});

async function consumePromise3() {
  try {
    const user = await promise3;
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

// consumePromise3();


// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))



async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()