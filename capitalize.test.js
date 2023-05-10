// import the capitalize function
const capitalize = require('./capitalize.js');

describe('capitalize function', () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('wORLD')).toBe('WORLD');
    expect(capitalize('')).toBe('');
  });

  it('should throw an error if input is not a string', () => {
    expect(() => capitalize(null)).toThrow();
    expect(() => capitalize(undefined)).toThrow();
    expect(() => capitalize(123)).toThrow();
    expect(() => capitalize({})).toThrow();
  });
});
