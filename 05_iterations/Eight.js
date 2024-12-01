// ### **What is `reduce` in JavaScript?**

// The **`reduce()`** method in JavaScript is used to process an array and reduce it to a single value (like a sum, product, or object). It applies a **callback function** on each element of the array, carrying over the result (called the **accumulator**) to the next iteration.

// ---

// ### **How Does `reduce()` Work?**

// The **`reduce()`** method works like this:
// 1. It takes a **callback function** that has:
//    - `accumulator` (the running total/result).
//    - `currentValue` (the current array element being processed).
// 2. Optionally, you can provide an **initial value** for the accumulator.

// ---

// ### **Syntax:**
// ```javascript
// array.reduce((accumulator, currentValue) => {
//   // logic to calculate new accumulator value
//   return accumulator;
// }, initialValue);
// ```

// ---

// ### **Simple Example: Adding Numbers in an Array**
// ```javascript
// const numbers = [1, 2, 3, 4];

// // Sum up all numbers
// const total = numbers.reduce((acc, curr) => acc + curr, 0);

// console.log(total); // Output: 10
// ```
// - **`acc`** starts at `0` (initial value).
// - Adds each number to `acc` in each iteration.

// ---

// ### **More Examples:**

// 1. **Finding the Maximum Value in an Array:**
// ```javascript
// const numbers = [5, 1, 8, 3];

// const max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), 0);

// console.log(max); // Output: 8
// ```

// 2. **Counting Occurrences in an Array:**
// ```javascript
// const fruits = ["apple", "banana", "apple", "orange"];

// const count = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});

// console.log(count); // Output: { apple: 2, banana: 1, orange: 1 }
// ```

// 3. **Flattening an Array of Arrays:**
// ```javascript
// const nested = [[1, 2], [3, 4], [5]];

// const flat = nested.reduce((acc, curr) => acc.concat(curr), []);

// console.log(flat); // Output: [1, 2, 3, 4, 5]
// ```

// ---

// ### **Why Use `reduce()`?**
// - It simplifies operations like summing, filtering, or transforming arrays.
// - It’s powerful for **aggregating data** in complex ways.
// - It avoids the need for multiple `for` loops.

// In short, **`reduce()`** is a concise and powerful tool for working with arrays in JavaScript!