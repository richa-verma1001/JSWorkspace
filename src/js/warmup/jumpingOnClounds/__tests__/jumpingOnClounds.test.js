import { jumpingOnClounds } from '../main.js';

describe('Jumping on Clouds', () => {
  test('0 0 0 0 0 0 0 => 3', () => {
    expect(jumpingOnClounds('0 0 0 0 0 0 0')).toEqual(3);
  });
  test('0 0 1 0 0 1 0 => 4', () => {
    expect(jumpingOnClounds('0 0 1 0 0 1 0')).toEqual(4);
  });
  test('0 1 0 0 1 0 0 1 0 => 5', () => {
    expect(jumpingOnClounds([0,1,0,0,1,0,0,1,0])).toEqual(5);
  });
  test('0 0 1 1 => 0', () => {
    expect(jumpingOnClounds('0 0 1 1')).toEqual(0);
  });
  test.skip('0 0 => 1', () => {
    expect(jumpingOnClounds('0 0')).toEqual(1);
  });
  test('0 => 0', () => {
    expect(jumpingOnClounds('0')).toEqual(0);
  });
  test('1, => 0', () => {
    expect(jumpingOnClounds('')).toEqual(0);
  });
});
