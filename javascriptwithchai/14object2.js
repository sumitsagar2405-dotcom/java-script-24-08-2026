// singleten

//const tinderUser=new Object();   // singleten object
const tinderUser={} // non singleten object

tinderUser.id='123abc'
tinderUser.name='Sammy'
tinderUser.isLogedIn=false;

//console.log(tinderUser);

const regularUser={
    email: "some@gmail",
    fullname: {
        userfullname:{
            firstname:"sumit",  // infiniote nesting [possible]
        lastname:"yadav"

        }
    }
}

console.log(regularUser.fullname.userfullname.firstname); // how we acces from nested objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "A", 4: "B"}
const obj4 = {5: "A", 6: "B"}

//const obj3 = {obj1, obj2 }  // problem object inside object

//const obj3 = Object.assign({},obj4,obj1,obj2) // we a empty array(source) all element are go inside empty array

const obj3={...obj1,...obj2,...obj4} // 90% usede this syntax
console.log(obj3);


const user = [
    {
    id:1,
    email:"h@gamil.com"
},
    {
    id:1,
    email:"h@gamil.com"
},
    {
    id:1,
    email:"h@gamil.com"
},
    {
    id:1,
    email:"h@gamil.com"
},
    {
    id:1,
    email:"h@gamil.com"
},
    {
    id:1,
    email:"h@gamil.com"
},
    {
    id:1,
    email:"h@gamil.com"
},
    {
    id:1,
    email:"h@gamil.com"
},
    {
    id:1,
    email:"h@gamil.com"
}
]

user[1].email

console.log(user[1].email);


// console.log(Object.keys(tinderUser));  /// return in  data type
// console.log(Object.values(tinderUser));  /// return in  data type
// console.log(Object.entries(tinderUser));  /// return in  data type


// console.log(tinderUser.hasOwnProperty("isLogedIn"));
