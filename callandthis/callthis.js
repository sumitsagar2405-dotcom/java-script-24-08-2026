function SetUsername(username){
    // complexe calls
    this.username = username
    console.log('called');
    
}

function createUser(username, email, password){
    SetUsername.call(this,username)   // external method to call a function
    this.email=email
    this.password = password
}


const chai = new createUser('chai','chai@fb.com','123')
console.log(chai);
