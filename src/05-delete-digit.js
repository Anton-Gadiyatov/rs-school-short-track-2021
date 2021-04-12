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
  const arr = [];
  const str = n.toString();
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    arr.push(str.substring(0, i) + str.substring(i + 1));
  }
  arr.forEach((el) => {
    if (+el > max) {
      max = +el;
    }
  });
  return max;
}

module.exports = deleteDigit;
