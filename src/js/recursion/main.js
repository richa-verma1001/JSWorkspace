/**
 * https://www.hackerrank.com/challenges/sock-merchant
 */
 export let list = {
   value: 1,
   next: {
     value: 2,
     next: {
       value: 3,
       next: {
         value: 4,
         next: null
       }
     }
   }
 };

 export const printList = () => {
   for(let elem of list){
     console.log(elem);
   }
 }
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

// Self practice
 export const pow =  (x, y) => {
   if(y == 0)
    return 1;
   if(y == 1)
    return x;
  else
    return x * pow(x, y-1);
 }

 export const sumTo = (n) => {
  if (n == 0)
    return 0;
  if (n == 1)
    return 1;
  else
    return n + sumTo(n-1);
 }

 export const factorial = (n) => {
   if( n == 0 )
    return 1;
   if( n == 1 )
    return 1;
   else
    return n * factorial( n-1 );
 }
