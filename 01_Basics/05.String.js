const name = 'John';
const age = 25;

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);

// Template Literals 
console.log(`My name is ${name} and I am ${age}`);

const gameName = new String('Call of Duty');
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.indexOf('of'));
console.log(gameName.charAt(3));
console.log(gameName.split(' '));
console.log(gameName.replace('Call', 'War'));
console.log(gameName.includes('Call'));
console.log(gameName.includes('of'));
console.log(gameName.includes('War'));
console.log(gameName.startsWith('Call'));

