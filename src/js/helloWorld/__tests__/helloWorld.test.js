import { helloWorld } from '../helloWorld.js';

describe('hello World', () => {
  test('should return hello world', () => {
    expect(helloWorld()).toEqual('Hello World');
  });
});
