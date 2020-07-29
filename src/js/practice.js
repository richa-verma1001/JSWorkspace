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

console.log(box[bag]);

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

var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log(arr2);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// Write exercise to compare objects
