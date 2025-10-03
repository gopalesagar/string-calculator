const { add } = require('./string-calculator.js');

describe('string-calculator.js => ', () => {
  it('should have an add function defined', () => {
    expect(add).toBeDefined();
    expect(typeof add).toBe('function');
  });
});