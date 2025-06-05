//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

 

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // Ye function declaration hai, aur JavaScript isko hoist (upar le ja) leti hai.
// Toh aap ise define karne se pehle bhi call kar sakte ho.

function addone(num){
    return num + 1
}



addTwo(5) // Ye function expression hai, jo const me likha gaya hai.
// const variables hoist toh hote hain, lekin initialize nahi hote jab tak code us line tak na pahunch jaye.
// Isliye agar aap addTwo(5) ko pehle call karoge, toh error aayega:
// Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num + 2
}