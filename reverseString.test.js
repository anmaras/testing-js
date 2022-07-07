import reverseStr from './reverseString';

test('return a string reversed', () => {
  expect(reverseStr('love')).toBe('evol');
});

test('return a number reversed', () => {
  expect(reverseStr(123)).toBe(321);
});
