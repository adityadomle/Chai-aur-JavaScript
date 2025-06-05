const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"// we have an concept of block scope and var can be accesible from outside the block scope which should not be done so dont use block scope
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/