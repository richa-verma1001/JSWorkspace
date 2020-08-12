/**
 * https://www.hackerrank.com/challenges/ctci-array-left-rotation
 */

// 5,1,2,3,7,8,6,4; length = 8; maxPos = 5.
 // export const newYearChaos = (q) => {
 //
 //   let bribes = 0;
 //   // check if any element is more than 2 positions of its place
 //   if(q.length >=1 && q.length <= 100000){
 //     for(let i=0; i < q.length; i++){
 //       for(let j=i+3; j < q.length; j++){
 //         if(q[i] > q[j]){
 //
 //           console.log('Too chaotic');
 //           return;
 //         }
 //       }
 //     }
 //     for(let k=0; k< q.length-1; k++){
 //       if(q[k] > q[k+1])
 //        bribes++;
 //       if(k < q.length-2 && q[k] > q[k+2])
 //        bribes++;
 //     }
 //   }
 //   console.log(bribes);
 //   //return bribes;
 // }

//[1,2,5,3,7,8,6,4] => 7, length: 8
// 5,1,2,3,7,8,6,4; length = 8; maxPos = 5
// export const newYearChaos = (q) => {
//   let bribes = 0;
//   let bribeMap = new Map();
//   console.log(q);
//   if(q.length >=1 && q.length <= 100000){
//     //q.sort((a, b) => b - a);
//     q.sort( (a,b) => {
//       if(a < b) {
//         console.log(`a: ${a} b: ${b} => a < b`);
//         return -1;
//       } else if(a > b){
//         console.log(`a: ${a} b: ${b} => a > b`);
//         return 1;
//       }
//       //console.log(q);
//     });
//
//   }
//   console.log(bribes);
//   console.log(q);
// }


 export const newYearChaos = (q) => {
  let bribes = 0;
  let bribeMap = new Map();

  if(q.length >=1 && q.length <= 100000){
     for(let i=0; i < q.length -1; i++){
       for(let j=i+1; j < q.length; j++){
         if(q[i] > q[j]){
           // need a swap
           bribes++;
           if(bribeMap[q[i]] && bribeMap[q[i]] === 2){
             //console.log('Too chaotic');
             return 'Too chaotic';
           }
           else {
             bribeMap[q[i]] = bribeMap[q[i]] ? bribeMap[q[i]] + 1 : 1;
           }

           let temp = q[i];
           q[i] = q[j];
           q[j] = temp;

          //console.table(bribeMap);
         }
       }
     }
  }
   return bribes;
 }

newYearChaos([1,2,5,3,7,8,6,4]);  // 7
//console.log(newYearChaos([5,1,2,3,7,8,6,4])); // too chaotic
//console.log(newYearChaos([2,5,1,3,4]));
 // const parseInput = (q) => {
 //   console.log(...q);
 //   return;
 // }
