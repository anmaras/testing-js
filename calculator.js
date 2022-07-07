const ERROR_MSG = 'arguments can be only numbers';

function checkArgs(a, b) {
  if (!isNaN(a) && !isNaN(b)) return true;
}

export const calculator = {
  add(a, b) {
    return checkArgs(a, b) ? Number(a) + Number(b) : ERROR_MSG;
  },

  subtract(a, b) {
    return checkArgs(a, b) ? a - b : ERROR_MSG;
  },

  divide(a, b) {
    if (!b) return 'Cant divide by zero';
    return checkArgs(a, b) ? a / b : ERROR_MSG;
  },

  multiply(a, b) {
    return checkArgs(a, b) ? a * b : ERROR_MSG;
  },
};
