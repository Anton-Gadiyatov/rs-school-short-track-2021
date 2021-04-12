/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let low = array[0];
  let high = array[array.length - 1];
  let center = Math.floor((low + high) / 2);
  let found = false;
  let index;

  while (low <= high && found === false) {
    center = Math.floor((low + high) / 2);
    if (center === value) {
      index = center - array[0];
      found = true;
    } else if (center > value) {
      high = center - 1;
    } else {
      low = center + 1;
    }
  }
  return index;
}

module.exports = findIndex;
