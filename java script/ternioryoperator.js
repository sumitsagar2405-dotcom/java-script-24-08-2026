let age=29;

let status1=(age<18) ? "i can't vote" : "i can vote";
console.log(status1)




// logical operator

let ans=(true&&true&&true); // ans=true
console.log(ans)

ans=(true&&false&&true); // ans= false
console.log(ans)

ans=(false||false||false||false); // ans=false
console.log(ans)

ans=(false||false||true||false); // ans=ture

console.log(ans)

ans=(!true);
console.log(ans)

// ans=(true||'sumit yadav')
// ans=(true||5)

// to find these values we have 

// falsy=> 1. undefined 2. null 3. 0 4. false 5. NaN 6. ''     consider as false

// anythinng else falsy consider as true 
ans=(true&&'sumit');
console.log(ans)

// bitwise operator

// AND 
console.log(2&5);  // perform actual binary

// OR
console.log(2|5);// perform actual binary number then respond
console.log(~(2|5));// perform actual binary number then respond and at 2's compliment then 

console.log(~(0));
console.log(2^2);
console.log(2^3);
console.log(5<<3); // 5 multiplied with 2**3

console.log(100>>5); // 100 divide by 2**5