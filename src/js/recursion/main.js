/**
 * https://www.hackerrank.com/challenges/sock-merchant
 */

 export const fibonacci = (n) => {
     if(n === 0)
      return 0;
     else if(n === 1)
      return 1;
     else if(n > 0 && n <= 30){
       return fibonacci(n-1) + fibonacci(n-2);
     }
     else {
       return;
     }
   }

 // console.log(fibonacci(0));
 // console.log(fibonacci(1));
 // console.log(fibonacci(2));
 // console.log(fibonacci(3));
 // console.log(fibonacci(-1));
// export const staircase = (n) => {
//
// }
