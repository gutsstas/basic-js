const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arrayChain:[],
  getLength() {
    return this.arrayChain.length;
  },
  addLink(value) {
    this.arrayChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(position - 1 < this.arrayChain.length && position - 1  >= 0){
      this.arrayChain.splice(position-1, 1);
      return this;
    }
    else{
      this.arrayChain = [];
      throw new Error("You can't remove incorrect link!");
    }
  },

  reverseChain() {
    this.arrayChain.reverse();
    return this;
  },
  finishChain() {
    const res = this.arrayChain.join('~~');
    this.arrayChain = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
