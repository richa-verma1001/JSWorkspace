import { newYearChaos } from '../main.js';

describe('newYearChaos', () => {
  test('[2,5,1,3,4] -> Too Chaotic', () => {
    expect(newYearChaos([2,5,1,3,4])).toEqual("Too chaotic");
  });
  test('[2,1,5,3,4] -> 3', () => {
    expect(newYearChaos([2,1,5,3,4])).toEqual(3);
  });
  test('[1,2,3,4,5] => 0', () => {
    expect(newYearChaos([1,2,3,4,5])).toEqual(0);
  });
  test('2 1 => 1', () => {
    expect(newYearChaos([2,1])).toEqual(1);
  });
  test('[] => 0', () => {
    expect(newYearChaos([])).toEqual(0);
  });
  test('[5,1,2,3,7,8,6,4] => Too Chaotic', ()=> {
    expect(newYearChaos([5,1,2,3,7,8,6,4])).toEqual("Too chaotic");
  });
  test('[[1,2,5,3,7,8,6,4] => 7', ()=> {
    expect(newYearChaos([1,2,5,3,7,8,6,4])).toEqual(7);
  });

});
