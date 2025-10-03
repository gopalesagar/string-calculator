const add = (input) => {
  if(typeof input !== 'string') throw new Error('Input must be a string!');

  if(input === '') return 0;

  let DELIMITER_REGEX = /,|\n/;
  let sum = 0;

  if (input.startsWith('//')) {
    const delimiterEndIndex = input.indexOf('\n');
    const delimiter = input.substring(2, delimiterEndIndex);
    input = input.substring(delimiterEndIndex + 1);
    DELIMITER_REGEX = new RegExp(delimiter);
  }
  let numbers = input.split(DELIMITER_REGEX).map(n => parseInt(n));

  sum = numbers.reduce((sum, n) => sum + n, sum);

  return sum;
};

module.exports = { add };