const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(mac) {
  let macAddressSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

  if (mac.length !== 17) return false;

  for(let i = 2; i < 15; i += 3){
    if(!mac[i] === '-') return false
  }

  for(let j = 0; j < mac.length; j++){
    if(j !== 2 && j !== 5  && j !== 8 && j !== 11 && j !== 14){
       if(!macAddressSymbols.includes(mac[j])) return false;
    }
  }

  return true
}

module.exports = {
  isMAC48Address
};
