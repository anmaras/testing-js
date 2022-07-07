export default function capitalize(str) {
  if (str.includes('')) {
    return str
      .split(' ')
      .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
      .join(' ');
  }
}
