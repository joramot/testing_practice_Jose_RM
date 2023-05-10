import capitalize from './capitalize.js';

describe('capitalize function', () => {
  it('should capitalize the first character of a string', () => {
    expect(capitalize('hello')).toBe('hello');
    expect(capitalize('this is a test')).toBe('This is a test');
    expect(capitalize('')).toBe('');
    expect(capitalize('1abc')).toBe('1abc');
  });

  it('should throw an error if argument is not a string', () => {
    expect(() => capitalize(123)).toThrow(TypeError);
    expect(() => capitalize([])).toThrow(TypeError);
    expect(() => capitalize({})).toThrow(TypeError);
    expect(() => capitalize(null)).toThrow(TypeError);
    expect(() => capitalize(undefined)).toThrow(TypeError);
  });
});
