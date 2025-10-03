const add = (input) => {
  if(typeof input !== 'string') throw new Error('Input must be a string!');

  if(input === '') return 0;

  let DELIMITER_REGEX = /,|\n/;
  let sum = 0;

  if (input.startsWith('//')) {
    const delimiterEndIndex = input.indexOf('\n');
    const delimiter = input.substring(2, delimiterEndIndex).replace('[', '').replace(']', '');;
    
    input = input.substring(delimiterEndIndex + 1);
    DELIMITER_REGEX = new RegExp(delimiter);
  }
  console.log('DELIMITER_REGEX: ', DELIMITER_REGEX);
  let numbers = input.split(DELIMITER_REGEX).map(n => parseInt(n));
  console.log('NUMBERS: ', numbers);
  const negatives = numbers.filter(n => n < 0);
  if(negatives && negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
  }

  numbers = numbers.filter(n => n <= 1000);

  sum = numbers.reduce((sum, n) => sum + n, sum);

  return sum;
};

module.exports = { add };