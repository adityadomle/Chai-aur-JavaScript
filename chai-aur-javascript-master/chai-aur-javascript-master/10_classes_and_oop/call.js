function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
} 

function createUser(username, email, password){
    SetUsername.call(this, username)// jo bhi object new createUser(...) se banega, usi ke andar username set ho jaye
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);