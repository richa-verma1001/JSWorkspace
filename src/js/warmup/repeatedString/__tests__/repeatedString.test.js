import { repeatedString } from '../main.js';

describe('repeatedString', () => {
  test('aba, 10 => 7', () => {
    expect(repeatedString('aba', 10)).toEqual(7);
  });
  test('a, 10 => 10', () => {
    expect(repeatedString('a', 10)).toEqual(10);
  });
  test('ab, 10 => 5', () => {
    expect(repeatedString('ab', 10)).toEqual(5);
  });
  test('a, 1000 => 1000', () => {
    expect(repeatedString('a', 1000)).toEqual(1000);
  });
  test(', 10 => 0', () => {
    expect(repeatedString('', 10)).toEqual(0);
  });
  test(', 1000000000000 => 1000000000000', () => {
    expect(repeatedString('a', 1000000000000)).toEqual(1000000000000);
  });
});
