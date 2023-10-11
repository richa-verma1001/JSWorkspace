// series here - https://youtu.be/6wNt8B8aH80

'use strict';
// arrays
let a1 = new Array(5).fill(Math.random());
let a2 = Array.from({
  length: 5
}, (n) => Math.random());

//setTimeout(_callback, delay);
let t1 = () => {
  console.log('start');
  setTimeout(function(){
    console.log('a');
  }, 1000);
  setTimeout(function(){
    console.log('b');
  }, 1000);
  setTimeout(function(){
    console.log('c');
  }, 500);
  setTimeout(function(){
    console.log('d');
  }, 1000);
  setTimeout(function(){
    console.log('e');
  }, 0);
  console.log('end');
};
console.log(a1);
console.log(a2);
t1();   // start, end, e, c, a, b, d


//Hoisting
function hoisting() {
  console.log(a);
  try {
    console.log(b);
  } catch(error) {
    console.log(error.message);
  }// to fix: use try catch

  var a = 'var declaration';
  let b = 'let declaration';
}
hoisting();

//let result = ['1', '2', '30'].map(parseInt);
['1', '2', '30'].map(function(item){
  console.log(parseInt(item));
});
//console.log(result

// dot notation vs square brackets
let obj1 = {
  a: 'c',
  b: 'd'
};

// obj1 = {
//   five: '5'
// };

 let obj2 = {
  c: '3',
  d: '4'
};

obj1 = Object.assign(obj1, obj2);
console.log(`obj1.keys(): ${Object.keys(obj1)} Values: ${Object.values(obj1)}`);
console.log(`obj1.a: ${obj1.a}`);
//console.log(`five: ${obj1.five}`);
console.log(`obj1[a]: ${obj1['a']}`);
//console.log(obj1[a]);  // error
console.log(`obj1.a.c: ${obj1.a.c}`);   // undefined
console.log(`obj2[obj1[a]]: ${obj2[obj1['a']]}`);

let isInt = (num) => {
  if(typeof num === "number" && Number.isInteger(num) )
    console.log('It is a int');
  else {
    console.log('Not int');
  }
}
isInt(23);
isInt(23.4);
isInt('richa');
isInt([]);
isInt({});

console.log(typeof 42);  // expected output: "number"
console.log(typeof 'blubber'); // expected output: "string"
console.log(typeof true); // expected output: "boolean"
console.log(typeof undeclaredVariable); // expected output: "undefined"
// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
typeof [1, 2, 4] === 'object';
// This stands since the beginning of JavaScript
typeof null === 'object';
// All constructor functions, with the exception of the Function constructor, will always be typeof 'object'
let str = new String('String');
let num = new Number(100);

typeof str; // It will return 'object'
typeof num; // It will return 'object'

let func = new Function();

typeof func; // It will return 'function'


// (function f1(){
//   //var x = 3;
//   var a = 1, b = 2;
//   var x = y = 3;  // will give error in strict mode only
// })();
// (function f1(){
//   //var x = 3;
//   let c = 1, d = 2;
//   let m = n = 6;  // will give error in strict mode only
// })();
//
//  console.log(global.y);
// console.log(`b: ${b}`);
// console.log(`x: ${x}`);
// console.log(`y: ${y}`);


/**
 * What will the output from the console.log be and why?
 */
let box = {};
let bag = {
  prop: "bag",
  can: "box"
};
let can = {
  prop: "can",
  bag: "box"
};
box[bag] = "Monday";
box[can] = "Tuesday";

console.log('box[bag]: ' + box[bag]);

/**
*/
let ftw = function(name) {
  console.log("Depending on the season,", name, "is a good guy");
};
let wtf = function(name) {
  console.warn("Depending on the season,", name, "is a bad guy");
};
let app = (function() {
  const castiel = { name: "Castiel", isGood: true };
  const crowley = { name: "Crowley", isGood: false };
  //use callback function here
})();

//sum(2,3) ; sum(2)(3) ==> should both return same result
let sum = function(x) {
  if(arguments.length === 2)
    return arguments[0] + arguments[1];
  else {
    return function(y) {
      x + y;
    }
  }
}

console.log(sum(2)(3));

var arr1 = "john".split('');  //Returns an array of split string ['j', 'o', 'h', 'n']
var arr2 = arr1.reverse();  //['n','h','o','j']
var arr3 = "jones".split('');
arr2.push(arr3);
console.log(arr2);  //[ 'n', 'h', 'o', 'j', [ 'j', 'o', 'n', 'e', 's' ] ]
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));


let factorial = function(x) {
  if(x == 0 || x == 1)
    return 1;
  else {
    return x * factorial(x-1);
  }
}
console.log(`Factorial: ${factorial(0)}`);
console.log(`Factorial: ${factorial(1)}`);
console.log(`Factorial: ${factorial(4)}`);

let sum1 = function(x) {
  if(x == 0)
    return 0;
  if(x == 1)
    return 1;
  else {
    return x + sum1(x-1);
  }
}
console.log(`Sum: ${sum1(0)}`);
console.log(`Sum: ${sum1(1)}`);
console.log(`Sum: ${sum1(4)}`);
console.log(`Sum: ${sum1(5)}`);


let iterate = function (array) {
  array.forEach(elem => console.log(elem));
}

// Mutator methods : copyWithin, fill, pop, push, shift, unshift, sort, splice, reverse
let array2 = [4,3,1,5,6];
array2.sort( (a,b) => b-a);
console.log(`Sorted array list ${array2}`); // [6,5,4,3,1]
array2.splice(4, 0,2);
console.log(`splice/insert 2: ${array2}`);  // [6,5,4,3,2,1]
array2.push(0);
console.log(`Push 0: ${array2}`);   // [6,5,4,3,2,1,0]
array2.pop();
console.log(`Pop element: ${array2}`);  //[6,5,4,3,2,1]
array2.shift();
console.log(`Side shifted: ${array2}`); // [5,4,3,2,1]
array2.unshift(8,7,6);
console.log(`unshift: ${array2}`); //[8,7,6,5,4,3,2,1];
array2.reverse();
console.log(`reverse: ${array2}`); //[1,2,3,4,5,6,7,8]
array2.copyWithin(0,7);
console.log(`copyWithin: ${array2}`); //[8,2,3,4,5,6,7,8]
// Finish mutator methods

// Accessor Methods
let array3 = ['a','b','c','d','e','b'];
let array4 = ['a, b, c, d, e'];
console.log(array4.concat(array2)); //[ 'a, b, c, d, e', 8, 2, 3, 4, 5, 6, 7, 8 ]
console.log(array3);
console.log(`array4.length: ${array4.length}`);  // length: 1
console.log(array3.indexOf('c'));  // 2
console.log(array4.indexOf('c'));  // -1 ; c is not found here
console.log(array3.lastIndexOf('b'));   //5
console.log(array3.join(' ')); // Returns a string : a b c d e b
console.log(array4.join('')); // Returns a string a, b, c, d, e, b
console.log(array3.toString());
console.log(array4.toString());
console.log(array4.slice(-5)); //[ 'a, b, c, d, e' ]
console.log(array4.slice(0)); //[ 'a, b, c, d, e' ]
console.log(array4.slice()); //[ 'a, b, c, d, e' ]


// Iterables - Most take a callback function
let fnArray = ['a', 'b', 'c'];
//fnArray.map(function(item, index, array){}, thisArgs);
let mappedArray = fnArray.map((item) => {
  switch(item){
    case 'a':
      return 'richa';
    case 'b':
      return 'chinkey';
    case 'c':
      return 'mansi';
    default:
      return;
  }
});
console.log(`Original array ${fnArray}`);
console.log(`Mapped array: ${mappedArray}`);



let companies = [
   {name: 'IBM', established: 1978, size: null},
   {name: 'Chevron', established: 1962, size: 'big'},
   {name: 'Google', established: 2001, size: 'big'},
   {name: 'Amazon', established: 2008, size: 'big'},
   {name: 'Facebook', established: 2002, size: 'medium'},
   {name: 'Apple', established: 1998, size: 'medium'},
   {name: 'slack', established: 2011, size: 'size'},
 ];

 let upcoming = [
   {name: 'Prism', established: 2018, size: 'small'},
   {name: 'Tesla', established: 2019, size: 'medium'},
 ]

 let numbers = [1,2,3,4,5,6,7];

companies.forEach( company => console.log(company));
let companyIterator = companies.entries();
for( let company of companyIterator){
  console.log(company);
}

//filter new companies
let newCompanies = companies.filter( company => company.established >= 2000);
console.log(newCompanies);

// every: check if size is specified for each company
let hasSize = companies.every( (company) => company.size);
console.log(`Companies have size: ${hasSize}`);

// some: are there any xsmall companies in the mix
let hasXsmall = companies.some( (company) => company.size && company.size.toLowerCase() == 'xsmall');
console.log(`Has xsmall compnaies ${hasXsmall}`);

//find: Find a large medium company
let mediumCompany = companies.find( (company) => company.size && company.size.toLowerCase() == 'medium');
console.log(mediumCompany);

//reduce
const getMax = (a, b) => Math.max(a,b);
console.log([10,20].reduce(getMax, 30));   // 30
console.log([ 20].reduce(getMax, 30));     // 30
console.log([ ].reduce(getMax, 1));

// provide sum of numbers[] using reduce
let total = numbers.reduce( ((a, b) => a + b), 10);
console.log(total);
