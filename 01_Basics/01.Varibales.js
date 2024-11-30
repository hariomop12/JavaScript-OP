const accountId = 1; // const variable not changeable
let accountEmail = "test@test" // let variable
var accountPassword = "test123" // var variable and d'ont use it because of issues with scope and function scope
accountCity = "Mumbai" // variable without declaration
let accountState; // undefined variable

 
accountEmail = "test2@test" // No Error
accountCity = "Pune" // No Error
// accountId = 2 // Error
accountPassword = "test1234" // Error

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) // 1 test2@test test123 Mumbai

// // Scope

// {
//     // Block Scope
// }


