import caesarCipher from './caesarCipher';

test('a returns b', () => {
  expect(caesarCipher('a')).toBe('b');
});
