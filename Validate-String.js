/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let str = "";

  for (let i = s.length - 1; i >= 0; i--) {
    str += s[i];
  }
  if (s === str) {
    return true;
  }

  return false;
};

console.log(isValid("sharpener"));
