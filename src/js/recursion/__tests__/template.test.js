import {
  fibonacci,
  staircase
  } from '../main.js';

describe('fibonacci', () => {
  test('fibonacci(0) => 0', () => {
    expect(fibonacci(0)).toEqual(0);
  });
  test('fibonacci(1) => 1', () => {
    expect(fibonacci(1)).toEqual(1);
  });
  test('fibonacci(2) => 1', () => {
    expect(fibonacci(2)).toEqual(1);
  });
  test('fibonacci(3) => 2', () => {
    expect(fibonacci(3)).toEqual(2);
  });
  test('fibonacci(6) => 8', () => {
    expect(fibonacci(6)).toEqual(8);
  });
  test('fibonacci(-1) => undefined', () => {
    expect(fibonacci(-1)).toEqual(undefined);
  });
});
