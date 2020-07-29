import Calc from '../Calc.js';

let myCalc = new Calc();
describe('Calculator', () => {
  test('add 2 + 3 equals 5', () => {
    expect(myCalc.add(2, 3)).toEqual(5);
  });

  test('subtract 5 - 3 to equal 2', () => {
    expect(myCalc.subtract(5, 3)).toEqual(2);
  });

});
