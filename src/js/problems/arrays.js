'use strict';

// 123456 => [1, 2, 3, 4, 5, 6]
const getNumArray = (num) => {
  return num.toString().split('').map((item) => parseInt(item));
};

// [1,2,3,4,5,6], 2, 3 => [1, 4, 5, 6]
export const filterValues = (array, ...values) => {
  // arr.filter(callback(element[,index, [array]])[,thisArg])
  return array.filter((item) => isMatch(item, ...values));
}

const isMatch = (item, ...values) => {
  const input = [...values];
  return input.includes(item) ? false : true;
}

//Write a JavaScript program to compare two objects to determine if the first
//one contains equivalent property values to the second one
// obj1 = {a: 1, b: 2, c: 3}, obj2 = {a: 4, b: 5, c:6}  check if  obj1 has same vals as obj2
export const isObjectSame = (obj1, obj2) => {
  if( Object.entries(obj1).length != Object.entries(obj2).length)
    return false;
  return Object.keys(obj1).every((key) => {
      return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
    });
}

// return true if two arrays are identical
// [a, b, c ] is not idential to [a, b, d]
export const isArraySame = (arr1, arr2) => {
  if(arr1.length != arr2.length)
    return false;
  return arr1.every( (item, index) => {
    return (item === arr2[index]);
  });
}

// const getObjectEntries = (obj) => {
//   for(const [key, value] of Object.entries(obj)){
//     return `${key}: ${value}`;
//   }
// }

// 9. Write a JavaScript program to combine the numbers of a given array
// into an array containing all combinations
// [1,2,3,4] => [ [] , [1], [12], [123], [1234] ]
// export const getAllCombinations = (arr) => {
//
// }

// isPalindrome: e.g.bub
export const isPalindrome = (str) => {
  const orig = str.toLowerCase().replace(/\s/g, '');
  return orig.split('').reverse().join('') === orig ? true : false;
}

// [1,2,3,4,5,6,7,8,9] = 9-1 = 8
export const difference = (arr) => {
  arr = Array.from(new Set(arr));
  let sorted =  arr.sort( (first, second) => {
    return first >= second ? 1 : -1;
  });
  return sorted[sorted.length-1] - sorted[0];
}

/**
 * Write a script that will find all the vowels [a,e,i,o,u] inside any string
 * and then flip the order of only the vowels. If there is an odd number of vowels
 * then the one in the middle stays in the same position. Complete this task with the
 * fewest number of loops and iterations as possible.
 * Eg:
 * cottage => cettago
 * hello => holle
 * sauce => seuca
 * javascript => jivascrapt
 */
export const getVowels = (str) => {
  //const vowelArr = ['a','e','i','o','u'];
  const regex = /[aeiou]/g;
  return str.match(regex);
}

export const rearrangeVowels = (str) => {
  const regex = /[aeiou]/g;
  let modified = str.split('');  // String => Array
  let vowels = str.match(regex);  // Array

  modified.forEach( (char, i) => {
    // Handle vowels only
    if(['a','e','i','o','u'].includes(char)){
      modified[i] = vowels.pop();
    }
  });
  return modified.join('');
}

console.log(`Printing ${filterValues([1,2,3,4,5,6], 2,3)}`);
//isObjectSame({a:1, b:2, c:3},{a:1, b:2, c:4});
//getAllCombinations([1,2,3,4]);
//isPalindrome('A but tuba');
//sum(2,5);
//sum(2)(7);
//let arr1 = [2,1,3,5,5,3,9,8,7];
//console.log(`Printing sorted array: ${difference(arr1)}`);
rearrangeVowels("cottage");

export default getNumArray;
