const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  let emptyArr = [];
  let result = [];
  if (!Array.isArray(arr)){
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }else if (arr == undefined){
    result = emptyArr;
  } else {
    let newArr = [...arr];
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === '--discard-next' && i !== arr.length-1){
        newArr[i] = '*';
        newArr[i+1] = '*';
      } else if(arr[i] === '--discard-next' && i === arr.length-1){
        newArr[i] = '*';
      } else if(arr[i] === '--discard-prev' && i !== 0){
        newArr[i] = '*';
        newArr[i-1] = '*';
      } else if(arr[i] === '--discard-prev' && i === 0){
        newArr[i] = '*';
      } else if(arr[i] === '--double-next' && i !== arr.length-1){
        newArr[i] = newArr[i+1];
      } else if(arr[i] === '--double-next' && i === arr.length-1){
        newArr[i] = '*';
      } else if(arr[i] === '--double-prev' && i !== 0){
        newArr[i] = newArr[i-1];
      } else if(arr[i] === '--double-prev' && i === 0){
        newArr[i] = '*';
      } else {
        newArr[i] = newArr[i];
      }
      result = newArr.filter(elem => elem !== '*')
    }
  }
   return result
}

module.exports = {
  transform
};
