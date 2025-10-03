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

    it('should support newline instead of comma for delimeter', () => {
      expect(add('1\n2,3')).toBe(6);
    });

    it('should support delimiter change with the format `//[delimiter]\n[numbers…]`', () => {
      expect(add('//;\n1;2')).toBe(3);
    });

    it('should throw error if negative number is passed in input', () => {
      expect(() => add('//;\n1;-2')).toThrow('negative numbers not allowed -2');
    });

    it('should accept new delimeter of length more than 1', () => {
      expect(add('//###\n1###2000###3###1000')).toBe(1004);
    });

    it('should throw error if negative numbers are passed in input', () => {
      expect(() => add('//;\n1;-2;-5;5')).toThrow('negative numbers not allowed -2,-5');
    });

    it('should ignore numbers bigger than 1000', () => {
      expect(add('//###\n1###2000###3###1000')).toBe(1004);
    });

    it('delimiter will be enclosed by square brackets', () => {
      expect(add('//[###]\n1###4###5###5')).toBe(15);
    });
  });
});