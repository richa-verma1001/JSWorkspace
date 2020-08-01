import { sockMerchant } from '../main.js';

describe('sock merchant', () => {
  test('9,10 20 20 10 10 30 50 10 20 => 3', () => {
    expect(sockMerchant(9,'10 20 20 10 10 30 50 10 20')).toEqual(3);
  });
  test('14, 1 2 1 2 1 3 2 11 3 11 11 100 100 5 => 5', () => {
    expect(sockMerchant(14, '1 2 1 2 1 3 2 11 3 11 11 100 100 5')).toEqual(5);
  });
  test('2, 1 2 1 2  => 0', () => {
    expect(sockMerchant(2, '1 2 1 2')).toEqual(0);
  });
  test('0, => 0', () => {
    expect(sockMerchant(0, '')).toEqual(0);
  });
  test('2,0 => 0', () => {
    expect(sockMerchant(2, '0 0')).toEqual(0);
  });
  test('3, [1,1,2] => 0', () => {
    expect(sockMerchant(3, [1,1,2])).toEqual(1);
  });
});
