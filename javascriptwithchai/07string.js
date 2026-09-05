//console.log('string');

//console.log('sumit'+" "+'yadav'+" B.tech"+"[CSE]"); // tis is very old ways of codign in now days noone prefer this type

// let name1='sumit yadav'
// let repoCount='10'
// console.log(`hello my name is ${name1} and my repo count is ${repoCount}`)


// new way to declare a string

// let myName= new String('sumit yadav');
// console.log(myName);
// console.log(myName[2]);           // by  using this method we can acces key value pair

// console.log(myName.__proto__);

// console.log(myName.length);
// console.log(myName.toUpperCase());  // change all character to upper case
// console.log(myName.charAt(2));  //we can acceess a specific character at a specific index
// console.log(myName.indexOf('y')); // we can check index of character

// const newString = myName.substring(0, 4);  // last index is exclusive
// console.log(newString);

// const anotherString=myName.slice(-9,4);
// console.log(anotherString);

// const string1="     sumit     ";
// console.log(string1);
// console.log(string1.trim());   // remove starting and ending spaces  here is trim
// console.log(string1.trimStart());   // remove starting  spaces  here is trim
// console.log(string1.trimEnd());   // remove ending spaces  here is trim


// // spaces in url already converted into %20

// const url='https://hitesh.com/hitesh%20chaudhary'



// console.log(url.replace('%20','-'));  // using this method we can replace anything to anything

// console.log(url.includes('hitesh'));  //  we can check it contains a specific string or not  give boolean value



let myName= new String('sumit-yadav-from-sultanpur');
console.log(myName.split('-'));  // all value we will get in array splited

