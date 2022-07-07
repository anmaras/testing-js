import capitalize from './capitalize';

test('first letter is uppercase', () => {
  expect(capitalize('john')).toBe('John');
});

test('multiple words ', () => {
  expect(capitalize('anthony maras')).toBe('Anthony Maras');
});
