import analyzeArray from './analyzeArray';

test('array item is not a number', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, '6'])).toBe(
    'array items are not numbers'
  );
});

test('array cant be empty', () => {
  expect(analyzeArray([])).toBe('array is empty');
});

test('return object with properties', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
