const add = (input) => {
  if(typeof input !== 'string') throw new Error('Input must be a string!');

  if(input === '') return 0;

  return parseInt(input);
};

module.exports = { add };