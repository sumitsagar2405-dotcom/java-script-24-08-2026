// singleton        => object.creat

// object literals

const mySym=Symbol("key")// how to use symbol data type as a key
const mySym1=Symbol("key1")// how to use symbol data type as a key

const Jsuser= {
    name:"sumit yadav",
    age:20,
    Location:"jaipur",
    isLogedin:false,
    lastloginDays:["Monday","Saturday"],
    email:"sumit@gmail.com",
    "full name":"sumit yadav",
    mySym:"key",
    [mySym1]:"mykey1"// it is actual way to use symbol data type as key
}

// console.log(Jsuser.email);
// console.log(Jsuser["full name"]);  //  we ccan not accces this by using .email
// console.log(Jsuser.mySym);

// console.log(typeof Jsuser.mySym);  // it sowing string but we need symbol


// console.log(Jsuser[mySym1]);
// console.log(typeof Jsuser[mySym1]);

Jsuser.email="sumityadav@gmial"// how to cahnge the value of keys in ocject
//console.log(Jsuser.email);
//Object.freeze(Jsuser); // aftr freeze we cant change anything 
Jsuser.email='sumit'
//console.log(Jsuser.email);
// 3:57


Jsuser.greeting= function(){
    console.log("say heloo");
    
}
Jsuser.greetingTwo= function(){
    console.log(`say hello js user ${this["full name"]}`);
    
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

