/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countOnes = function (nums, k) {
  let l = 0;
  let r = 0;
  let count = 0;
  let max = -Infinity;
  let newk = k;

  while (r < nums.length) {
    if (nums[r] === 0 && k > 0) {
      k--;
      count = r - l + 1;
      r++;
    }

    if (nums[r] === 1) {
      count = r - l + 1;
      r++;
    }

    if (count > max) {
      max = count;
    }

    if (k === 0) {
      while (nums[l] !== 0) {
        l++;
      }
      k++;
    }

    console.log(l);
  }

  return max;
};

console.log(countOnes([1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1], 2));
