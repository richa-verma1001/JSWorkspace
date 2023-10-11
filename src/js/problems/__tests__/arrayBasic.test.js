//import modifyArray from '../arrayBasic';
import {
  myArray,
  fromArray,
  arrayOf,
  copyArray,
  modifyArray,
} from '../arrayBasic';

describe('Perform copy on array', () => {
  test('Array copies and refs are as expected', () => {
    modifyArray(myArray, 0, 4,5);
    expect(myArray).toEqual([7,2,3,5,7,11]);
    expect(fromArray).toEqual([1,2,3,5,7,11]);
    expect(arrayOf).toEqual([[7,2,3,5,7,11]]);
    expect(copyArray).toEqual([1,2,3,5,7,11]);
  });
});
