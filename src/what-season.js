const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return ('Unable to determine the time of year!');
  }
  if (isNaN(Date.parse(date)) || Object.keys(date)
  .length > 0){
    throw new Error ("Invalid date!");
  }
  
  let month = date.getUTCMonth();
  if (month == 0) {
    return 'winter'
  }
  if (month == 1) {
    return 'winter'
  }
  if (month == 2) {
    return 'spring'
  }
  if (month == 3) {
    return 'spring'
  }
  if (month == 4) {
    return 'spring'
  }
  if (month == 5) {
    return 'summer'
  }
  if (month == 6) {
    return 'summer'
  }
  if (month == 7) {
    return 'summer'
  }
  if (month == 8) {
    return 'autumn'
  }
  if (month == 9) {
    return 'autumn'
  }
  if (month == 10) {
    return 'autumn'
  }
  if (month == 11) {
    return 'winter'
  }

}

module.exports = {
  getSeason
};
