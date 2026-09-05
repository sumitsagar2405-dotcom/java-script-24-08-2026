// console.log("string is a sequence of corector")
// console.log("if in the files have spaces for github allwways use double inveted commas")

// let firstName="sumit";
// let lastName='yadav ';

// let name1=new String('sumit yadav')

// let introduction=`i am sumit yadav 
// from sultanpur, im currently persuing b.tech from bundelkhand universityt jhansi,
// hello everyone`

// console.log(introduction)
// console.log(firstName)
// console.log(lastName)
// console.log(name1)

// operation on string 
   



// concancatinte 

// let op1='hindi ';
// let op2='english ';

// let op=op1+op2;
// console.log(op);


// let op1='hindi ';
// let op2='english ';
// let finalAns=`${op1}${op2}`;


// console.log(finalAns);
// console.log(op1.toLocaleUpperCase())
// console.log(op2.toUpperCase())

// let op3="SUMIT";
// console.log(op3.toLocaleLowerCase())


// // substring methid

// let ooo="sumitydav";
// console.log(ooo.substring(2));
// console.log(ooo.substring(2,5));  // firts index is enclusive and  last indedx is exclusive

// let sentence='hello jee kaise ho sare';

// // let words=sentence.split(' ');

// // console.log(words);
// let words=sentence.split('e');

// console.log(words);

// use of \ AND \

// let sentence='hello jee "kaise" ho sare';
// let sentence1="hello jee \"kaise\" ho sare";

// console.log(sentence);
// console.log(sentence1);

// backslace allways pretend to do not consider as spaecial character 

// jis bhi character kr aage \ laga hia means usse normal treat karna hia special nahi 


let sentence='hello \\jee \\kaise \\ho \\sare';
let words=sentence.split('\\');

console.log(words);
console.log(words.join('-'));
