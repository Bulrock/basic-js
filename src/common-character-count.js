const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let arrFromS1 = s1.split('');
  let arrFromS2 = s2.split('');
  let mySetS1 = new Set(s1);
  let mySetS2 = new Set(s2);
  let intersection = new Set([...mySetS1].filter(x => mySetS2.has(x)));
  let intersectionArr = Array.from(intersection);
  let result1 = [];
  let result2 = [];
  let result = [];

  for(let i = 0; i < intersectionArr.length; i++){
    let a = 0;
    for(let j = 0; j < arrFromS1.length; j++){
      if(intersectionArr[i] === arrFromS1[j]){
        a +=1
        result1[i] = a;
      } else{
        a = a
        result1[i] = a;
      }
    }

    let b = 0;
    for(let k = 0; k < arrFromS2.length; k++){
      if(intersectionArr[i] === arrFromS2[k]){
        b +=1
        result2[i] = b;
      } else{
        b = b
        result2[i] = b;
      }
    }
    result[i] = Math.min(result1[i], result2[i])
  }

  let sum = 0;
  for (let l = 0; l < result.length; l++){
    sum = sum + result[l];
  }
  return sum
}

module.exports = {
  getCommonCharacterCount
};
