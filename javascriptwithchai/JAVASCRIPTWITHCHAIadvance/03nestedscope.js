// // //console.log("nested scope");


// // function one(){
// //     const username="hitesh"

// //     function two(){
// //         const website = "youtube"
// //         console.log(username); // we can access user name here because we are inside function one()
// //     }

// //     //console.log(website); // we can not acces website here outside of the function two()

// //     two()// we have to call two manually
    
// // }



// // one()



// if (true){
//     const username="hitesh"
//     if(username=='hitesh'){
//         const website=" youtube"
//         console.log((username+website));
        
//     }
//     // console.log(website);// so an error because here   we are outside of the scope
    
// }

// // console.log(username);// also an error becuse we are tryinb to access variable outside of the scope


//+++++++++++++++++++++++++++++++++++++interesrting++++++++++++++++++++++++++++//

console.log(addone(5));// we can access

function addone(num){  // this type of we can acces befor declaration
    return num+1
}

// console.log(addTwo(5));// so error


const addTwo =function(nuim){  // this type of function we cant acces befor declaration
    return nuim +2
}


