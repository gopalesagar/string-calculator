const { add } = require('./string-calculator.js');

describe('string-calculator.js => ', () => {
  it('should have an add function defined', () => {
    expect(add).toBeDefined();
    expect(typeof add).toBe('function');
  });

  describe('add function => ', () => {

    it('should return 0 for empty string input', () => {
      const sum = add('');
      expect(sum).toBe(0);
    });
  });
});