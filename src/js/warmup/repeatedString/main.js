/**
 * https://www.hackerrank.com/challenges/repeated-string/
 */

// aba, 10 ==> 7
 export const repeatedString = (s, n) => {
   let result = 0;
   const n_min = 1;
   const n_max = 1000000000000;
   const s_min = 1;
   const s_max = 100;
   const sLength = s.length;

   if(n >= n_min && n <= n_max
    && sLength >= s_min && sLength <= s_max){
      const matches = s.match(/a/g) && s.match(/a/g).length;
      let repeats = Math.floor( n / sLength );
      let remaining = n % sLength > 0 && s.slice(0, [n % sLength]);
      let rMatches = remaining && remaining.match(/a/g) && remaining.match(/a/g).length;
      result = (repeats * matches) + rMatches;
    }

   return result;
 }

 console.log(repeatedString('aba', 10));
