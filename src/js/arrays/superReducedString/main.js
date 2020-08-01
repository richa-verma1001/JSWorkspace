/**
 * https://www.hackerrank.com/challenges/reduced-string/problem
 */

// aaabccddd => abd | a,a,a,b,c,c,d,d,d => a,b,d
 export const superReducedString = (s) => {
   let result = "Empty String";
   s = s.split('');

   for(let i=0; i < s.length - 1; i++) {
     if(s[i] === s[i+1]){
       s.splice(i,2);
       i = -1;
     }
   }
   result = s.length > 0 ? s.toString().replace(/,/g,'') : result;
   return result;
 }

 console.log(superReducedString('baab'));
