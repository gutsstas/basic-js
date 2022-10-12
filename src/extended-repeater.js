const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let strOpt = '';
  let res = '';
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let addition = String(options.addition) || '';
  if(addition == 'undefined') addition = '';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';

  strOpt+= addition;
  while(additionRepeatTimes !== 1) {
    strOpt += additionSeparator + addition;
    additionRepeatTimes--;
  }
  res = str + strOpt;

  while(repeatTimes !== 1) {
    res += separator + str + strOpt;
    repeatTimes--;
  }
  return res;

}

module.exports = {
  repeater
};
