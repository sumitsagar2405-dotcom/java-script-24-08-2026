/// object literal

const user = {
    name:'hitesh',
    logincount: 8,
    signedIn:true,


    getUserDetails: function(){
        //console.log('got details from database');
        console.log(`Username: ${this.name}`);
        console.log(this); // beccause name is outside of the scope so we have to write this 
        
        
    }
}
  

//console.log(user.grtUserDetails());

console.log();

console.log(user.getUserDetails())


console.log(this);



function User(username, logincount, isLoggedIn){
    this.username=username;
    this.logincount=logincount;
    this.isLoggedIn=isLoggedIn;
    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }

    //return this   // ye by default return hota hai
}
  

const userOne= new User("hitesh",12,true)
const userTwo= new User("chai aur code",12,true)

console.log(userOne.constructor);
