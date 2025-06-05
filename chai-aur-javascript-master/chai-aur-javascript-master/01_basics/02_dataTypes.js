"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object // typeof null returns "object" — this is a JavaScript bug from the past (it's not really an object, but it shows "object")

// Symbols are often used as object keys to avoid key name conflicts
const myKey = Symbol("secret");// The "secret" is just a description (also called a label) for the symbol. It’s optional and only used to help with debugging.
const obj = {
  [myKey]: "hidden value"
};

console.log(obj[myKey]); // "hidden value"
// to access symbol you need to do something like


