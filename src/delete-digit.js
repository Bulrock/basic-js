const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let arrayOfNumbers = [];

  let stringArr = String(n).split('');
  for(let i = 0; i < stringArr.length; i++){
    let tempStringArr = String(n).split('');
    tempStringArr.splice(i,1)
    arrayOfNumbers.push(Number(tempStringArr.join('')));
  }

  arrayOfNumbers.sort((a,b) => a-b);
  return arrayOfNumbers[arrayOfNumbers.length-1]
}

module.exports = {
  deleteDigit
};
