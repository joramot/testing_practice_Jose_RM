import {stringLength} from './stringLength';
test('string length return the correct length of string', () => {
  expect(stringLength('hello')).toBe(5);
  // expect(stringLength('hello world')).toBe(11);
  expect(stringLength('')).toBe(0);
  expect(stringLength('123456789')).toBe(9);
});