import capitalize from './capitalize';

test('first letter is uppercase', () => {
  expect(capitalize('john')).toBe('John');
});
