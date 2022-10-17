const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect){
    this.direction = isDirect === undefined ? true : isDirect;
  }

  encrypt(message, key) {
    if(!message || !key){
      throw new Error('Incorrect arguments!');
    }

    key = key.toUpperCase();
    message = message.toUpperCase();
    let encryptedString = '';
    let keyIndex = 0;

    for(let i = 0; i < message.length; i++){
      if(message[i].charCodeAt() > 64 && message[i].charCodeAt() < 91){
        let messageLetterNumber = message[i].charCodeAt() - 65;
        let keyLetterNumber = key[keyIndex % key.length].charCodeAt() - 65;
        let encryptedSymbol = (messageLetterNumber + keyLetterNumber)%26 + 65;
        encryptedString += String.fromCharCode(encryptedSymbol);
        keyIndex += 1;
      } else {
        encryptedString += message[i];
      }
    }

    if(this.direction){
      return encryptedString;
    } else {
      let reversedEncryptedString = '';
      for(let i = encryptedString.length - 1; i >= 0; i--){
        reversedEncryptedString += encryptedString[i];
      }
      return reversedEncryptedString;
    }
  }

  decrypt(message, key) {
    if(!message || !key){
      throw new Error('Incorrect arguments!');
    }

    key = key.toUpperCase();
    message = message.toUpperCase();

    let decryptedString = '';
    let keyIndex = 0;

    for(let i = 0; i < message.length; i++){
      if(message[i].charCodeAt() > 64 && message[i].charCodeAt() < 91){
        let messageLetterNumber = message[i].charCodeAt() - 65;
        let keyLetterNumber = key[keyIndex % key.length].charCodeAt() - 65;
        let decryptedSymbol = ((messageLetterNumber - keyLetterNumber) + 26)%26 + 65;
        decryptedString += String.fromCharCode(decryptedSymbol);
        keyIndex += 1;
      } else {
        decryptedString += message[i];
      }
    }

    if(!this.direction){
      decryptedString = decryptedString.split('').reverse().join('');
    }
    return decryptedString;
  }
}

module.exports = {
  VigenereCipheringMachine
};
