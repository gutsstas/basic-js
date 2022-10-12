const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = ''
  let count = 1;
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == arr[i+1]){
      count++
    } else {
      if(count == 1) res += arr[i];
      else{
        res+= count + arr[i];
        count = 1
      }
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
