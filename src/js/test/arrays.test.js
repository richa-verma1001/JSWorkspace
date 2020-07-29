import getNumArray,
  {
    filterValues,
    isObjectSame,
    isArraySame,
    getAllCombinations,
    isPalindrome,
    difference,
    getVowels,
    rearrangeVowels
  } from '../arrays.js';

// describe('', () => {
//   test('', () => {
//
//   });
// });

describe('convert number to array of digits', () => {
  test('23456 => [2,3,4,5,6]', () => {
    expect(getNumArray(23456)).toEqual([2,3,4,5,6]);
  });
  test('2 => [2]', () => {
    expect(getNumArray(2)).toEqual([2]);
  });
});

describe('return back filtered array', () => {
  test('[1,2,3,4,5,6],2,3 => [1,4,5,6]' , () => {
    expect(filterValues([1,2,3,4,5,6],2,3)).toEqual([1,4,5,6]);
  });
  test('[1,2,2,4,5,6],2,3 => [1,4,5,6]', () => {
    expect(filterValues([1,2,2,4,5,6],2,3)).toEqual([1,4,5,6]);
  });
  test('[1],2,3 => [1]', () => {
    expect(filterValues([1],2,3)).toEqual([1]);
  });
  test('[1],1 => []', () => {
    expect(filterValues([1],1)).toEqual([]);
  });
});

describe('compare arrays', () => {
  test('[a, b, c],[a, b, c] => true', () => {
    expect(isArraySame(['a', 'b', 'c'],['a', 'b', 'c'])).toBeTruthy();
  });
  test('[a, b, c],[a, b, d] => false', () => {
    expect(isArraySame(['a', 'b', 'c'],['a', 'b', 'd'])).toBeFalsy();
  });
  test('[a, b, c],[a, b] => false', () => {
    expect(isArraySame(['a', 'b', 'c'],['a', 'b'])).toBeFalsy();
  });
});

describe('compare objects', () => {
  test('{a:1, b:2, c:3},{a:1, b:2, c:3} => true', () => {
    expect(isObjectSame({a:1, b:2, c:3},{a:1, b:2, c:3})).toBeTruthy();
  });
  test('{a:1, b:2, c:3},{a:1, b:2, c:4} => false', () => {
    expect(isObjectSame({a:1, b:2, c:3},{a:1, b:2, c:4})).toBeFalsy();
  });
  test('{a:1, b:2, c:3},{a:1, b:2} => false', () => {
    expect(isObjectSame({a:1, b:2, c:3},{a:1, b:2})).toBeFalsy();
  });
  test('{},{} => false', () => {
    expect(isObjectSame({},{})).toBeTruthy();
  });
  test('{a:1, b:2, c:3},{} => false', () => {
    expect(isObjectSame({a:1, b:2, c:3},{})).toBeFalsy();
  });
});

describe('highest and lowest element difference in array', () => {
  test('[2,1,3,5,5,3,9,8,7] => 8', () => {
    expect(difference([2,1,3,5,5,3,9,8,7])).toEqual(8);
  });
  test('[0] => 0', () => {
    expect(difference([0])).toEqual(0);
  });
  test('[0,10] => 10', () => {
    expect(difference([0,10])).toEqual(10);
  });
  test('[2,2,2,2,2,2] => 0', () => {
    expect(difference([2,2,2,2,2,2])).toEqual(0);
  });
});

describe('getVowels', () => {
  test( 'cottage => [o, a, e]', () => {
    expect(getVowels('cottage')).toEqual(['o','a','e']);
  });
  test( 'javascript => [a, a, i]', () => {
    expect(getVowels("javascript")).toEqual(['a','a','i']);
  });
});

describe.only('rearrangeVowels', () => {
  test( 'cottage => cettago', () => {
    expect(rearrangeVowels("cottage")).toEqual('cettago');
  });
  test( 'javascript =>  jivascrapt', () => {
    expect(rearrangeVowels('javascript')).toEqual('jivascrapt');
  });
  test( 'hello =>  holle', () => {
    expect(rearrangeVowels('hello')).toEqual('holle');
  });
  test( 'sauce =>  seuca', () => {
    expect(rearrangeVowels('sauce')).toEqual('seuca');
  });
});
