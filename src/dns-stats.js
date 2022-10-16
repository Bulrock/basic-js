const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let resultDNSStats = {};
  let arrTemp = [];

  for(let i = 0; i < domains.length; i++){
    domains[i] = domains[i].split('.').reverse();
    arrTemp = [];

    for(let j = 0; j < domains[i].length; j++){
      if(j === 0){
        arrTemp.push(`.${domains[i][j]}`);
      } else {
        arrTemp.push(domains[i][j]);
      }

      if(resultDNSStats.hasOwnProperty(arrTemp.join('.'))){
        resultDNSStats[arrTemp.join('.')] += 1;
      } else {
        resultDNSStats[arrTemp.join('.')] = 1;
      }
    }
  }
  return resultDNSStats;
}

module.exports = {
  getDNSStats
};
