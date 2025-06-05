const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')// 👉 This creates a String object — like a string packed inside a box (object).
// It still behaves like a string in most cases, but it’s not the same type.

const name1 = "hitesh"
const gameName1 = new String("hitesh")

console.log(name1 == gameName1);  // ✅ true (value matches)
console.log(name1 === gameName1); // ❌ false (type mismatch)

console.log(gameName[0]);
console.log(gameName.__proto__);// hows you all the string methods like length, toUpperCase(), charAt(), etc.


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));