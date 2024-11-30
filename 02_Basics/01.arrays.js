// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

// array methods

// console.log(myArr.length);
// console.log(myArr.indexOf(3));
// console.log(myArr.join("-"));
// console.log(myArr.concat(myArr2));
// console.log(myArr.push(1));
// console.log(myArr);

// myArr.unshift(9);
// console.log(myArr);

// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));



// slice and splice

// ### **Difference Between `slice()` and `splice()` in JavaScript**

// Both `slice()` and `splice()` are methods used to manipulate arrays in JavaScript, but they work very differently.

// ---

// ### **1. `slice()`**
// - **What it Does**: Creates a shallow copy of a portion of an array.
// - **Key Points**:
//   - Does **not modify the original array** (it returns a new array).
//   - Takes two arguments: the start index (inclusive) and the end index (exclusive).

// #### **Example**:
// ```javascript
const fruits = ["apple", "banana", "cherry", "date"];
const sliced = fruits.slice(1, 3); // From index 1 to 3 (not including 3)

console.log(sliced); // Output: ["banana", "cherry"]
console.log(fruits); // Original array remains unchanged: ["apple", "banana", "cherry", "date"]
// ```

// ---

// ### **2. `splice()`**
// - **What it Does**: Adds, removes, or replaces elements in an array.
// - **Key Points**:
//   - **Modifies the original array**.
//   - Takes three arguments:
//     1. Start index: Where to begin the changes.
//     2. Delete count: How many elements to remove.
//     3. (Optional) Items to add: New elements to insert at the start index.

// #### **Example**:
// ```javascript

// Remove 2 elements starting from index 1, and add "kiwi", "mango"
fruits.splice(1, 2, "kiwi", "mango");

console.log(fruits); // Output: ["apple", "kiwi", "mango", "date"]
// ```

// ---

// ### **Key Differences**:
// | Feature           | `slice()`                         | `splice()`                     |
// |--------------------|-----------------------------------|---------------------------------|
// | **Effect on Array** | Does not change the original array | Modifies the original array     |
// | **Purpose**         | Extracts a portion of the array   | Removes, replaces, or adds elements |
// | **Return Value**    | Returns a new array              | Returns removed elements (if any) |

// ---

// ### **In Simple Words**:
// - Use **`slice()`** when you want to make a copy or extract a portion of an array without changing the original.
// - Use **`splice()`** when you need to modify the array by adding, removing, or replacing elements.