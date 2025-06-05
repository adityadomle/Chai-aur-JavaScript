// switch (key) {
//     case value:
        
//         break;
 
//     default:
//         break;
// }


// Ye month variable ki value ko check karega multiple cases ke saath.
// Jo case match karega, us block ka code run hoga, fir break se switch block se bahar aa jaayega.
// Agar koi case match nahi karta, toh default block chalega.
// But yahan "march" match ho gaya, isliye default nahi chala.

const month = "march"

switch (month) {
    case "jan": 
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
} 
