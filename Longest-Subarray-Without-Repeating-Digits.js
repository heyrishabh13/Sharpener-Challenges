/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var longestSubarray = function (nums) {
  let l = 0;
  let r = 0;
  let map = new Map();
  let count = 0;
  let max = -Infinity;

  while (r < nums.length) {
    if (!map.has(nums[r])) {
      map.set(nums[r], 1);
    } else {
      while (map.has(nums[r])) {
        map.delete(nums[l]);
        l++;
      }
    }

    count = r - l + 1;
    if (count > max) {
      max = count;
    }
    console.log(max);
    r++;
  }

  return max;
};

console.log(longestSubarray([0, 2, 1, 4, 4]));
