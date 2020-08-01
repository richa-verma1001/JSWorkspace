import { countingValleys } from '../main.js';

describe('counting Valleys', () => {
  test('8,UDDDUDUU => 1', () => {
    expect(countingValleys(8,'UDDDUDUU')).toEqual(1);
  });
  test('100,UDDDUDUUD => 0', () => {
    expect(countingValleys(100,'UDDDUDUUD')).toEqual(0);
  });
  test('1,D => 0', () => {
    expect(countingValleys(1,'D')).toEqual(0);
  });
  test('13,DUDUDUDDDDDUU => 0', () => {
    expect(countingValleys(13,'DUDUDUDDDDDUU')).toEqual(3);
  });
});
