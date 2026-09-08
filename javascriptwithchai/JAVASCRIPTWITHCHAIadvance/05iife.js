// Immediately Invoke Function Expressions (IIfE)


(function chai(){  // named iife
    console.log(`DB CONNECTED`); // global scope ke pollution ko hatane ke iife ka use kiya
    
})();  // rrun instant    semicolon must to stop the fuction


( (name)=>{  // unnamed iife 
    console.log(`DB CONNECTED ${name}`);
    
})("sumit");


