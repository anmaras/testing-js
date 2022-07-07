import caesarCipher from './caesarCipher';

test('when char is z then it turns a', () => {
  expect(caesarCipher('z')).toBe('a');
});

test('when char is number then its number plus 1', () => {
  expect(caesarCipher(1)).toBe('2');
});

test('when char is uppercase or lowercase the case wont change', () => {
  expect(caesarCipher('A')).toBe('B');
});

test('special characters wont change', () => {
  expect(caesarCipher('@')).toBe('@');
});

test('a returns b', () => {
  expect(caesarCipher('a')).toBe('b');
});
