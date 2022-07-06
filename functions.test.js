import {
  sum,
  capitalize,
  reverseStr,
  calculator,
  caesarCipher,
  analyzeArray,
} from './functions';

test('two plus two is four', () => {
  expect(sum(1, 1)).toBe(2);
});

test('first letter is uppercase', () => {
  expect(capitalize('john')).toBe('John');
});

test('string return reversed', () => {
  expect(reverseStr('nikos')).toBe('sokin');
});

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

test('a returns b', () => {
  expect(caesarCipher('a')).toBe('b');
});

test('return object with properties', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
