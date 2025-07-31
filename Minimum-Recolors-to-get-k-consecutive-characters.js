/**
 * @param {string} s
 * @return {number}
 */
var minRecolors = function (s, k) {
  let min = Infinity;

  for (let i = 0; i <= s.length - k; i++) {
    let count = 0;
    for (let j = i; j < i + k; j++) {
      if (s[j] === "W") {
        count++;
      }
    }
    if (count < min) {
      min = count;
    }
  }

  return min;
};

console.log(minRecolors("BWBBW", 3));
