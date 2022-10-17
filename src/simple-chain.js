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
    if(!this.chain){
      this.chain = [];
    }
    if(value){
      this.chain.push(value);
    }
    return this;
  },

  removeLink(position) {
    if(!this.chain) return this
    if(typeof position === NaN || !!(position % 1) === false || !this.chain[position]){
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position, 1);
    return this;
  },

  reverseChain() {
    this.chain?.reverse();
    return this;
  },

  finishChain() {
    return this.chain?.map(value => `( ${value} )`).join('~~') || "";
  }
};

module.exports = {
  chainMaker
};
