const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = (''+n).split('');
  let arrRes = [];
  for(let i =0; i < arr.length; i++) {
    let str = '';
    for(let j =0; j < arr.length; j++) {
      if(i !== j) str+= arr[j]
    }
    arrRes.push(+str);
  }
  return Math.max.apply(null,arrRes)
}

module.exports = {
  deleteDigit
};
