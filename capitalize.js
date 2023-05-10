export default function capitalize(string) {
  if (typeof string !== 'string') {
    throw new TypeError('Argument must be a string');
  }

  if (string.length === 0) {
    return string;
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}
