
// function saymyName(){
//     console.log("S");
//     console.log("U");
//     console.log("M");
//     console.log("I");
//     console.log("T");
// }

// // saymyName()

// function add(num1,num2){
//     return num1+num2;

// }

// console.log(add('sumit',' yadav'));
// console.log(add(3,4));
// console.log(add(3,null));
// console.log(add('3',4));

// function loginUser(name="sam"){ // we can give default value
//     if(name===undefined){
//         return "please inter user name"
//     }
//     else{
//         return `${name} just logedIn`;
//     }
    
// }

// console.log(loginUser("sumit yadav"))// sumit yadav just logedIn
// console.log(loginUser())// please inter user name


// function calculateCartPrice(...num1){
//     return num1;
// }

// console.log(calculateCartPrice(200,4000,500))

// function calculateCartPrice1(val1,val2,...num1){
//     return num1;
// }

// console.log(calculateCartPrice1(200,4000,500))


//**************************HOW TO GIVE ANY OBJECT AS A ARGUMENT*************************/


// const user={
//     username: "sumit",
//     price: 199,
//     age:21,
//     class:"elite"
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
// }

// handleObject(user)




//*********************HOW TO GIVE ARRAY AS A ARGUMENT INSIDE FUNCTION**********************/

const MYNewArray=[200,400,100,600];

function returnsecondvalueofarray(array){
    console.log(array[1]);
    
}

returnsecondvalueofarray(MYNewArray)