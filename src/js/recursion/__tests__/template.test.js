import {
  fibonacci,
  pow,
  sumTo,
  factorial,
  list
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

describe('pow', () => {
  test('pow(2,2) => 4', () =>{
    expect(pow(2,2)).toEqual(4);
  });
  test('pow(2,5) => 32', () =>{
    expect(pow(2,5)).toEqual(32);
  });
  test('pow(2,0) => 1', () =>{
    expect(pow(2,0)).toEqual(1);
  });
  test('pow(10,3) => 1000', () =>{
    expect(pow(10,3)).toEqual(1000);
  });
  test('pow(0,0) => 1', () =>{
    expect(pow(0,0)).toEqual(1);
  });
  test('pow(0,1) => 0', () =>{
    expect(pow(0,1)).toEqual(0);
  });
  test('pow(-1,2) => 1', () =>{
    expect(pow(-1,2)).toEqual(1);
  });
});

describe('sumTo', () => {
  test('sumTo(4) => 10', () => {
    expect(sumTo(4)).toEqual(10);
  });
  test('sumTo(0) => 0', () => {
    expect(sumTo(0)).toEqual(0);
  });
  test('sumTo(1) => 1', () => {
    expect(sumTo(1)).toEqual(1);
  });
  test('sumTo(100) => 5050', () => {
    expect(sumTo(100)).toEqual(5050);
  });
  // test('sumTo(1) => 1', () => {
  //   expect(sumTo(-1)).toEqual(-1);
  // });
});

describe('factorial', () => {
  test('5! => 120', () => {
    expect(factorial(5)).toEqual(120);
  });
  test('0! => 1', () => {
    expect(factorial(0)).toEqual(1);
  });
});

console.log(list);
