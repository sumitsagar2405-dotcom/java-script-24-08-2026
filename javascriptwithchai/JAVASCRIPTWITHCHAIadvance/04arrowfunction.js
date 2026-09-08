// const user={
//     username:"hitesh",
//     price:9999,

//     welcomeMessage: function (){
//         console.log(`${this.username}, welcome to website`);// this  for curent context
//         console.log(this);
        
//     }
// }

// // user.welcomeMessage()
// // user.username="sam"
// // user.welcomeMessage()

// console.log(this);// this give a empty {}  tehre is no any context of this outside of the scope




// function chai(){
//     let username="sumit"
//     console.log(this.username); // this is not aplicable inside functoion it is only aplicable at object
    
// }
// chai()

// const chai = () => {  // arroqw function
//     let username="sumit"
//     console.log(this);// also gives {}
    
// }

// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2  // we have to write return keyword // explicit return
// }

// const addTwo= (num1,num2) => num1+num2 // not need to write return  // emplicit return     
// const addTwo= (num1,num2) => (num1+num2) // not need to write return // emplicit return
// console.log(addTwo(3,4));

// how to return a object

const o = () => ({username:"sumit yadav"})

console.log(o());



