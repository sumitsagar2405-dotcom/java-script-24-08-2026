// console.log(2>2);
// console.log(2>1);
// console.log(2>=1);            // we can predict very easily
// console.log(2>=5);



// problematic part  when we compare to diffrent data types

// console.log("2">1);
// console.log("02">1);

// console.log(null>0);  // comparison treating null as 0
// console.log(null==0);  // equlity does traet null as 0
// console.log(null>=0);
// console.log(null|0);

// console.log(undefined==0);
// console.log(undefined>0);     // try to aoide these comparison
// console.log(undefined<0);

//        srict check ===   also check data type

console.log(2=='2');  // loose check give true
console.log(2==='2');  // strict check gives false


