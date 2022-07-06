import { sum, capitalize } from './functions';

test('two plus two is four', () => {
  expect(sum(1, 1)).toBe(2);
});

test('first letter is uppercase', () => {
  expect(capitalize('john')).toBe('John');
});
