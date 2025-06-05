const descripter = Object.getOwnPropertyDescriptor(Math, "PI")// This line is getting the property descriptor for Math.PI.

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); // still prints: 3.141592653589793 it can not be changed

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni"); 
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false, Can the value be changed?
    enumerable: true, // 	Will it show in for...in / Object.entries?
    configurable: false // Can it be deleted or redefined?
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}