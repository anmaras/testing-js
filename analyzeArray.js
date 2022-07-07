function arrAverage(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function arrMax(arr) {
  return Math.max(...arr);
}

function arrMin(arr) {
  return Math.min(...arr);
}

function arrLength(arr) {
  return arr.length;
}

function checkArrayItem(arr) {
  return !arr.every((ele) => typeof ele === 'number');
}

export default function analyzeArray(arr) {
  arr = arr.flat(3);

  if (checkArrayItem(arr)) {
    return 'array items are not numbers';
  }
  if (!arrLength(arr)) {
    return 'array is empty';
  }
  return {
    average: arrAverage(arr),
    min: arrMin(arr),
    max: arrMax(arr),
    length: arrLength(arr),
  };
}
