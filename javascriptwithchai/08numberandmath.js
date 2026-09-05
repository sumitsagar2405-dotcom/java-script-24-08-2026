const score=400;  // js automatically detect this is a number data type

// but we can also assign this to number in banking systems

const balance=new Number(1000);
 
console.log(score);

console.log(balance);

console.log(balance.toString().length);  // to find the length of number

console.log(balance.toFixed(4));  // by using this we can get the number of zeros after decimal 

const otherNumber=23.44568889;
  console.log(otherNumber.toPrecision(5));   /// it does roundeof




const hundred= 10000000;
console.log(hundred.toLocaleString());  //we get in usa standard with commas
console.log(hundred.toLocaleString('en-IN'));  //we get in india standard with commas

console.log(Number.MAX_SAFE_INTEGER)


//*********************************************MATH****************************************/

