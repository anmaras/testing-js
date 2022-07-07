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

export default function caesarCipher(str) {
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
