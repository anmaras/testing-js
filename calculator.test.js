import calculator from './calculator';

test('one plus one is two', () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test('one minus one is zero', () => {
  expect(calculator.subtract(1, 1)).toBe(0);
});

test('one divided by one is 1', () => {
  expect(calculator.divide(1, 1)).toBe(1);
});

test('two multiply by six is twelve', () => {
  expect(calculator.multiply(2, 6)).toBe(12);
});
