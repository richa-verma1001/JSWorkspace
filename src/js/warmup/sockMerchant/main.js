/**
 * https://www.hackerrank.com/challenges/sock-merchant
 */
'use strict';

// n = 7, ar = 1 2 1 2 1 3 2 11
export const sockMerchant = (n, ar) => {

  let pairs = 0;
  let colors;

  if(typeof ar === "string")
    colors = ar;
  else if(typeof ar === "object"){
    colors = ar.toString().replace(/,/g, ' ');
  }
  ar = (typeof ar === "string") ? ar.split(' ') : ar;

  if(ar.length === n && n >=1 && n <= 100) {
   let uniquePairs = new Set(ar);
   uniquePairs.forEach((item, i) => {
     if(item >=1 && item <= 100) {
       const regex = new RegExp(`\\b${item}\\b`,'g');
       let matches = colors.match(regex).length;
       pairs = pairs + Math.floor(matches / 2);
     }
   });
  }
  return pairs;
}

// Checkout more solutions here (solution is missing constaint handling though)
// https://gist.github.com/adyngom/30181d2f54cb4a2e36ba810292f4b17b

console.log(sockMerchant(14, '1 2 1 2 1 3 2 11 3 11 11 100 100 5'));



// Recursive solution:
// Base case : return base case result
// Others: fn(n, arr);
