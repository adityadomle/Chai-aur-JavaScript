const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // refers to the user object
    }

}

user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);// In browser: window object, In Node.js: {} (empty object) // Node.js har file ko ek module ki tarah treat karta hai. Global scope me this ka matlab hota hai: current module ka export object, jo default me ek empty object {} hota hai.  // Browser me this global scope me window object ko refer karta hai.

function chai(){
    let username = "hitesh"
    console.log(this.username);// // undefined, because `this` doesn't refer to local scope here
}

chai()

const chai = function () {
    let username = "hitesh"
    console.log(this.username);
}

const chai =  () => {
    let username = "hitesh"
    console.log(this);// If the arrow function is defined in the global scope, this will refer to the global object:
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()





// 🔸 Arrow function ka this khud ka nahi hota, yeh lexical scope (bahar ka context) se this inherit karta hai.
// 🔸 Normal function me this function ke andar ka hota hai, aur agar object ke through call na ho toh undefined milta hai.
// 🔸 Arrow function me this mostly global object (browser me window, Node.js me {}) hota hai.