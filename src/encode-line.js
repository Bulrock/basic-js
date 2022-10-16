const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let result = [];
  let count = 1;

  if(str === undefined || str.length === 0){
    return '';
  }

  result = [str[0],];
  for(i = 1; i < str.length; i++){
    if (str[i] === str[i-1]){
      count +=1;
      result.pop()
      result.push(`${count}${str[i]}`)
    } else {
      result.push(`${str[i]}`);
      count = 1
    }
  }

  return String(result.join(''));
}

module.exports = {
  encodeLine
};
