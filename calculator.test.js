import Calculator from './calculator.js';

describe('Calculator', () => {
  describe('add', () => {
    test('should return the sum of two positive numbers', () => {
      const calculator = new Calculator();
      expect(calculator.add(2, 5)).toBe(7);
    });

    test('should return the sum of two negative numbers', () => {
      const calculator = new Calculator();
      expect(calculator.add(-2, 10)).toBe(8);
    });

    test('should return the sum of a positive and a negative number', () => {
      const calculator = new Calculator();
      expect(calculator.add(-20, -5)).toBe(-25);
    });
  });

  describe('subtract', () => {
    test('should return the difference between two positive numbers', () => {
      const calculator = new Calculator();
      expect(calculator.subtract(-5, 2)).toBe(-7);
    });

    test('should return the difference between two negative numbers', () => {
      const calculator = new Calculator();
      expect(calculator.subtract(-5, -2)).toBe(-3);
    });

    test('should return the difference between a positive and a negative number', () => {
      const calculator = new Calculator();
      expect(calculator.subtract(5, -2)).toBe(7);
    });
  });

  describe('multiply', () => {
    test('should return the product of two positive numbers', () => {
      const calculator = new Calculator();
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test('should return the product of two negative numbers', () => {
      const calculator = new Calculator();
      expect(calculator.multiply(-2, -3)).toBe(6);
    });

    test('should return the product of a positive and a negative number', () => {
      const calculator = new Calculator();
      expect(calculator.multiply(2, -3)).toBe(-6);
    });
  });

  describe('divide', () => {
    test('should return the quotient of two positive numbers', () => {
      const calculator = new Calculator();
      expect(calculator.divide(6, 3)).toBe(2);
    });

    test('should return the quotient of two negative numbers', () => {
      const calculator = new Calculator();
      expect(calculator.divide(-6, -3)).toBe(2);
    });

    test('should return the quotient of a positive and a negative number', () => {
      const calculator = new Calculator();
      expect(calculator.divide(6, -3)).toBe(-2);
    });

    test('should throw an error if the second argument is zero', () => {
      const calculator = new Calculator();
      expect(() => calculator.divide(6, 0)).toThrow('Cannot divide by zero!');
    });
  });
});
