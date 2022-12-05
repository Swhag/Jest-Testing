import * as calculate from './calculator';

test('adds 1 + 2 to equal 3', () => {
  expect(calculate.sum(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(calculate.subtract(5, 3)).toBe(2);
});

test('divides 20 / 4 to equal 5', () => {
  expect(calculate.divide(20, 4)).toBe(5);
});

test('multiplies 7 * 8 to equal 28', () => {
  expect(calculate.multiply(7, 8)).toBe(56);
});
