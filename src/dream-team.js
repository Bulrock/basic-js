const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let tempArr = [];
  const removeSpaces = (str) => str.replace(/\s+/g, '')
  const isAlpha = /[A-Za-z]/;
  if(!Array.isArray(members)){
    return false
  }
  for(let i = 0; i < members.length; i++){
    if(typeof members[i] !== 'string'){
      continue
    } else{
      let removedSpacesString = removeSpaces(members[i]);
      if (isAlpha.test(removedSpacesString[0])){
        tempArr.push(removedSpacesString.charAt(0).toUpperCase())
      }else {
        tempArr = tempArr;
      }
    }
  }
  tempArr.sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0))
  return tempArr.join('')
}

module.exports = {
  createDreamTeam
};
