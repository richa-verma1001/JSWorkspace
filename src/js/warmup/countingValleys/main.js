/**
 * https://www.hackerrank.com/challenges/counting-valleys
 */

// s = UDDDUDUU
 export const countingValleys = (n, s) => {

   const minSteps = 2;
   const maxSteps = 1000000;
   const stepsUp = s.match(/U/g) && s.match(/U/g).length;
   const stepsDown = s.match(/D/g) && s.match(/D/g).length;
   let valleys = 0;
   let seaLevel = 0;
   let steps = s.split('');

   if(n === steps.length
      && n >= minSteps && n <= maxSteps
      && n === (stepsUp + stepsDown)) {
        steps.forEach((item, index) => {
          let isBelowSeaLevel = seaLevel < 0;
          if(item === 'U')
            seaLevel++;
          else if(item === 'D')
            seaLevel--;
          if(isBelowSeaLevel && seaLevel === 0)
            valleys++;
        });
      }
   return valleys;
 }

 //console.log(countingValleys(8, 'UDDDUDUU'));
