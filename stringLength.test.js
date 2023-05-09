import stringLength from './stringLength.js';

test('string length return the correct length of string', () => {
  expect(stringLength('hello')).toBe(5);
  expect(stringLength('hello world')).toBe(11);
  expect(stringLength('')).toBe(0);
  expect(stringLength('123456789')).toBe(9);
});

test('stringLength throws an error if string is too short', () => {
  expect(() => {
    stringLength('');
  }).toThrow('String must be between 1 and 10 characters long');
});

test('stringLength throws an error if string is too long', () => {
  expect(() => {
    stringLength('12345678901');
  }).toThrow('String must be between 1 and 10 characters long');
});

test('stringLength returns correct length for valid string', () => {
  expect(stringLength('hello')).toBe(5);
});