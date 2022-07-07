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

export function analyzeArray(arr) {
  return {
    average: arrAverage(arr),
    min: arrMin(arr),
    max: arrMax(arr),
    length: arrLength(arr),
  };
}
