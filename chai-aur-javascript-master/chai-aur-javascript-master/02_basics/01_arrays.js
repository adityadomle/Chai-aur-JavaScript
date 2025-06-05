// array

const myArr = [0, 1, 2, 3, 4, 5]// Array literal
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)// Array constructor
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // adds 9 to the beginning of the array.
// myArr.shift() // removes the first element from the array, so it removes 9 in this case.

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // combines all the elements of myArr into a single string separated by commas (by default)

console.log(myArr);
console.log( newArr);


// slice : creates a new array not modify, splice: modify the original array donot create a new one

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);