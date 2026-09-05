// let obj={
//     name:"sumit",
//     age:20,
//     weigth:85,
//     height:"5feet 9 inch",
//     greet: function(){
//         console.log("how are you ")
//     }
// }
// console.log(obj);
// console.log(typeof(obj));
// obj.greet();

// let arr=[1,2,3,4,5];
// console.log(arr)

// array constructer
// let brr= new Array('love',1,true);
// console.log(brr)
// console.log(brr[0])

// // built in method
// // 1.push => we can insert a number using this
// brr.push('Babbar');
// brr.push('23');
// brr.push(35);
// brr.push(78);
// brr.push(89);
// console.log(brr);
// // 2.pop => we can remove last item
// brr.pop();
// console.log(brr);
// // 3.shift => remove first element
// brr.shift();
// console.log(brr);

// // 4.unshift => INSERT AT FIRST POSITION
// brr.unshift('love');
// console.log(brr);

// // 5.slice => we can acces a part of array
// console.log(brr.slice(2,4));  // first index enclusive last indexs exclusive

// // 6. splice => by using this metohd we can change and insert remove and any change at any position

// console.log(brr.splice(1,2,'yadav'));
// console.log(brr);
// 7.map => using map function we can perform a same operation on a lot of data
// let arr=[1,2,3,4,5,6,7,8,9,10]

// let ansarray=arr.map((number) => {
//     return number**number;
// })
// console.log(ansarray)

// arr.map((number,index) => {
//     console.log(index+1,".",number**number);
// })


// // 8. filter => use to filter data on a given condition 
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let ans=arr.filter((number) =>{
//     if(number%2==0){
//         return true;
//     }
//     else{
//         return false
//     }
    
// })
// console.log(ans);


let arr=['sumit','yadav','cse',23,4 ,67 ,true];

let ans=arr.filter((item) => {
    if(typeof(item)=='string'){
        return true;
    }
    else{
        return false;
    }

})
console.log(ans)