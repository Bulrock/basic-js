const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {

  getLength() {
    return this.chain?.length || 0;
  },

  addLink(value) {
    let result = {...this};
    if(!result.chain) result.chain = [];
    result.chain.push(value)
    return result;
  },

  removeLink(position) {
    if(!Number.isInteger(position) || position > this.getLength() || position < 1){
      throw new Error("You can't remove incorrect link!");
    }
    if(!this.chain) return {...this}
    let result = {...this};
    (result.chain ?? []).splice(position-1, 1);
    return result;
  },

  reverseChain() {
    let result = {...this};
    (result.chain ?? []).reverse();
    return result;
  },

  finishChain() {
    let result = this.chain?.map(value => `( ${value} )`).join('~~') || "";
    this.chain = [];
    return result
  }
};

module.exports = {
  chainMaker
};
