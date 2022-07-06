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
