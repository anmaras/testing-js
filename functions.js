export function sum(a, b) {
  return a + b;
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseStr(str) {
  return str.split('').reverse().join('');
}

export const calculator = {
  add(a, b) {
    return Number(a + b);
  },
  subtract(a, b) {
    return a - b;
  },

  divide(a, b) {
    return a / b;
  },

  multiply(a, b) {
    return a * b;
  },
};

function numberToString(number) {
  return number.toString();
}

function checkUpperCase(str) {
  if (str.charCodeAt() >= 65 && str.charCodeAt() <= 90) return true;
}

function checkLowerCase(str) {
  if (str.charCodeAt() >= 97 && str.charCodeAt() <= 122) return true;
}

function checkNumber(str) {
  if (str.charCodeAt() >= 48 && str.charCodeAt() <= 57) return true;
}

function checkForZ(str) {
  if (str.charCodeAt() === 122 || str.charCodeAt() === 90) return true;
}

export function caesarCipher(str) {
  let text = '';

  if (typeof str === 'number') {
    str = numberToString(str);
  }

  for (let i = 0; i < str.length; i++) {
    if (
      checkUpperCase(str[i]) ||
      checkLowerCase(str[i]) ||
      checkNumber(str[i])
    ) {
      if (checkForZ(str[i])) {
        text += String.fromCharCode(str[i].charCodeAt() - 25);
      } else {
        text += String.fromCharCode(str.charCodeAt(i) + 1);
      }
    } else {
      text += String.fromCharCode(str.charCodeAt(i));
    }
  }
  return text;
}

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

let result = analyzeArray([1, 8, 3, 4, 2, 6]);

console.log(result);
