export default function reverseStr(str) {
  if (typeof str === 'number') {
    return Number(str.toString().split('').reverse().join(''));
  }
  return str.split('').reverse().join('');
}
