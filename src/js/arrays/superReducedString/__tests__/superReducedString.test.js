import { superReducedString } from '../main.js';

describe('superReducedString', () => {
  test(' => Empty String', () => {
    expect(superReducedString('')).toEqual("Empty String");
  });
  test('aa => Empty String', () => {
    expect(superReducedString('aa')).toEqual("Empty String");
  });
  test('baab => Empty String', () => {
    expect(superReducedString('baab')).toEqual("Empty String");
  });
  test('aaabccddd => Empty String', () => {
    expect(superReducedString('aaabccddd')).toEqual("abd");
  });
  test('a => Empty String', () => {
    expect(superReducedString('a')).toEqual("a");
  });
});
