// how to create promises 
const promiseNone = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is cpmpleted');
        resolve()
    },1000)
})/// promise created

promiseNone.then(function(){
    console.log('promise consumed ');
    
})

// another way to create promise

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log(" asynce 2 is completed");
        resolve()     
    },1000)
})
.then(function(){
    console.log("Async task 2");
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: 'chai',email:'chai@example.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})



// another way to wright a promise

const  promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"sumit",password:'123'})
        }else {
            reject('ERROR: something went wrong')
        }
    },1000)
})

promiseFour.then( (user) => {
    console.log(user);
    return user.username
    
})
.then( (username)=>{
    console.log(username);
    
} )
.catch(function(error){
    console.log(error);
    
})
.finally(()=> console.log('the promise either resolved or rejected'))

