const accountId=1234;  // we canot change const

let accountEmail="sumit@google";
accountEmail='change'
var accountPassword="121212";
accountPassword='new';
accountCity="Jaipur";
accountCity='Benguluru';

let accountState;

console.table([accountEmail,accountId,accountPassword,accountCity,accountState]); // any varaible except const can be change

// do not use var because it can not understand block scope {}

