let myArray = [1,2,3,5,7,11];
let fromArray = Array.from(myArray);  //makeas a shallow copy, no reference to origninal
let arrayOf = Array.of(myArray);      //creates a reference to myArray
let copyArray = [...myArray];         // makes a new copy. No reference to original

// Mutator methods : copyWithin, fill, pop, push, shift, unshift, sort, splice, reverse
myArray.copyWithin(0,4,5);    // [7,2,3,5,7,11]

const modifyArray = (array, target, start, end) => {
  array.copyWithin(target, start, end);
}

//export default modifyArray;
export {myArray, fromArray, arrayOf, copyArray, modifyArray};


// Given a list of numbers, sort it ascending
let array2 = [4,3,1,5,6];
const sortArray = (array, first, second) => {
  return first - second;
}
