const add = (input) => {
  if(typeof input !== 'string') throw new Error('Input must be a string!');

  if(input === '') return 0;

  const DELIMITER = ',';
  let sum = 0;
  let numbers = input.split(DELIMITER).map(n => parseInt(n));

  sum = numbers.reduce((sum, n) => sum + n, sum);

  return sum;
};

module.exports = { add };