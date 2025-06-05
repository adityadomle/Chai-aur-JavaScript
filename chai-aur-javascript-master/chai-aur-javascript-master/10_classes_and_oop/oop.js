const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);// this refers to the user object
    }

}



// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);// In Node.js, top-level this is an empty object {}, not the global object.



// this is a constructor here
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);//Yeh object User() constructor se bana hai
console.log(userTwo); 