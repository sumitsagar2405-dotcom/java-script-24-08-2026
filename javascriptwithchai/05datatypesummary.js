// memory mein data store hone ke aadhar per inhe do type mein divide kiya gaya hai

// Primitive  call by value  data ke copy ka acces aapko milta hai aur copy meinhi changes hote hain

//  7. types : String, Number, Boolean, null, undefined, Symbol, BIGInt


// Refernce(non primitive)
// Array,  Objects, Functions

let number=100;   // dynamically typed  we have not to tell that data type and js alraedy detect

// const id=Symbol('123');
// const anotherId=Symbol('123');    symbol use to store id's they allways unique

// console.log(id);
// console.log(anotherId);

// console.log(id===anotherId);          // guve false

// const bigNumber=1234567891234567891234567899874444444444444444444444444444444444444444444444444444465411332n;

// console.log(typeof bigNumber);


// ex. of some non primitive datatype

const heros=['shaktiman','nagraj','doga']

let myObj={
    name1:'sumit',
    age:22,

}
const myFuncton=function(){
    console.log("Hello World");
    
}


console.log((typeof myFuncton));
