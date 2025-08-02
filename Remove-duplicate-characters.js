/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    let count = 0;
    console.log(ans, s[i]);
    for (let j = 0; j < ans.length; j++) {
      if (ans[j] === s[i]) {
        count++;
      }
    }
    // console.log(count);

    if (count < 1) {
      ans += s[i];
    }
  }
  return ans;
};

console.log(removeDuplicates("programming"));
