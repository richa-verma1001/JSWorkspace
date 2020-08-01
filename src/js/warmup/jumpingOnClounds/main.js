/**
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds
 */

 export const jumpingOnClounds = (c) => {

  const minClouds = 2;
  const maxClouds = 100;
  const n = c.length;
  let jumps = 0;
  let clouds;

  if (typeof c === "string"){
    clouds = c;
    c = c.split(' ').map(i => parseInt(i));
  } else if(typeof c === "object"){
    clouds = c.toString().replace(/,/g, ' ');
  }

  if(n >= minClouds && n <= maxClouds
    && clouds.match(/[^01 ]/g) == null
    && c[0] === 0 && c[c.length - 1] === 0 ){

      while(c.length > 1){
        const startingCloud = c[0];
        if(c[2] === 0 ){
          c = c.slice(2);
          jumps++;
        } else if(c[1] === 0){
          c = c.slice(1);
          jumps++;
        }
      }
  }
  return jumps;
 }

// console.log(jumpingOnClounds(7, '0 0 0 0 0 0 0'));
// console.log(jumpingOnClounds(7, '0 0 1 0 0 1 0'));
// console.log(jumpingOnClounds(9, '0 1 0 0 1 0 0 1 0'));
// console.log(jumpingOnClounds(7, [0, 0, 1, 0, 0, 1, 0]));
// console.log(jumpingOnClounds(8, [0,0,1,0,1,0,0,0]));
//jumpingOnClounds(7, [0,0,1,0,0,1,0]);
//jumpingOnClounds(7, '0 0 1 1');
