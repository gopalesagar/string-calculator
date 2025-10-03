const { add } = require('./string-calculator.js');

describe('string-calculator.js => ', () => {
  it('should have an add function defined', () => {
    expect(add).toBeDefined();
    expect(typeof add).toBe('function');
  });

  describe('add function => ', () => {

    it('should accept only string as input', () => {
      const inputStringErrorMessage = 'Input must be a string!';
      expect(() => add(123)).toThrow(inputStringErrorMessage);
      expect(() => add([1, 2, 3])).toThrow(inputStringErrorMessage);
      expect(() => add({})).toThrow(inputStringErrorMessage);
      expect(() => add(null)).toThrow(inputStringErrorMessage);
    });

    it('should return 0 for empty string input', () => {
      expect(add('')).toBe(0);
    });

    it('should return same number for single number input', () => {
      expect(add('3')).toBe(3);
    });

    it('should return sum for 2 numbers', () => {
      expect(add('1,5')).toBe(6);
    });
  });
});