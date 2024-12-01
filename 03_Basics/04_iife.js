// Immediately Invoked Function Expression (IIFE)

// IIFE is a function that is executed right after it is created.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();



( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Hariom')