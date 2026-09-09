// const userEmail='sumit@gmail.ai'  // truthy

// if (userEmail){
//     console.log(`Got user email : ${userEmail}`);
    
// }else {
//     console.log( "Don't have user email");
    
// }
// const userEmail1=''  // falsy

// if (userEmail1){
//     console.log(`Got user email : ${userEmail1}`);
    
// }else {
//     console.log( "Don't have user email");
    
// }
// const userEmail2=[]  // truthy

// if (userEmail3){
//     console.log(`Got user email : ${userEmail3}`);
    
// }else {
//     console.log( "Don't have user email");
    
// }

///****************************RULES FOR TRUTHY AND FALSY*****************************/

// FALSY VALUE
// 1. false
// 2. 0
// 3. -0
// 4. bigInt 0n
// 5. empty string  ""
// 6. null
// 7. NaN


 // anything else is true

 // some surprising truthy values
 // "0"it is truthy
 //  "false"     it is truhty value
// " "      truthy value
//   {} and []   are truthy value
// function(){} truthy value      

// how to check empty array

// const array=[];
// if(array.length==0){
//     console.log("array is empty");    
// }
// const obj={};
// if(Object.keys(obj).length===0){
//     console.log("obj is empty");
    
// }


// false==0             true
// false==""        true
// 0==""                    true

// // NULLISH COALESCING OPERATOR (??) : null undee
//  const val1= 5 ?? 10;
//  console.log(val1);

//  const val7= null ?? 10;
//  console.log(val7);

//  const val6= undefined ?? 10;
//  console.log(val6);

//  const val5= 5 ?? null;
//  console.log(val5);

//  const val3= 5 ?? undefined;
//  console.log(val5);

//  const val2= null ?? undefined ?? 10;
//  console.log(val2);




// terniary operator

// condition ? true statement : false statement

const ice=200 ;
 ice<=200 ? console.log("less than or eaqual to 200")  : console.log("greater than 200");
 
 