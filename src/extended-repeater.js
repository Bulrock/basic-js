const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let bufferArray = [];

  if(options.additionRepeatTimes === undefined){
    if(options.addition !== undefined){
      bufferArray.push(String(options.addition));
    }
  } else {
    for(let i = 0; i < options.additionRepeatTimes; i++){
      bufferArray.push(String(options.addition));
    }
  }

  if(options.additionSeparator === undefined){
    bufferArray = bufferArray.join('|');
  } else {
    bufferArray = bufferArray.join(options.additionSeparator);
  }

  str = `${str}${bufferArray}`
  bufferArray = [];

  if(options.repeatTimes === undefined){
    bufferArray.push(str);
  } else {
    for(let i = 0; i < options.repeatTimes; i++){
      bufferArray.push(str);
    }
  }

  if(options.separator === undefined){
    bufferArray = bufferArray.join('+');
  } else {
    bufferArray = bufferArray.join(options.separator);
  }

  return bufferArray;
}

module.exports = {
  repeater
};
