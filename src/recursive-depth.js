const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    let maxNestedDepth = 0;
    for (let elem of arr){
      let currentNestedDepth = Array.isArray(elem) ? this.calculateDepth(elem) : 0;
      if(maxNestedDepth < currentNestedDepth){
        maxNestedDepth = currentNestedDepth;
      }
    }
    result += maxNestedDepth;
    return result
  }
}

module.exports = {
  DepthCalculator
};