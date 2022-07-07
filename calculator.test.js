import { calculator } from './calculator';

test('add numbers', () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test('arguments cant be letters', () => {
  expect(calculator.add('a', 'b')).toBe('arguments can be only numbers');
});

test('subtract numbers', () => {
  expect(calculator.subtract(1, 1)).toBe(0);
});

test('divide numbers', () => {
  expect(calculator.divide(9, 3)).toBe(3);
});
test('divide by zero', () => {
  expect(calculator.divide(1, 0)).toBe('Cant divide by zero');
});

test('multiply numbers', () => {
  expect(calculator.multiply(2, 6)).toBe(12);
});
