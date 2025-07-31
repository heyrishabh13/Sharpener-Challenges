/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var upperBound = function (nums, target) {
  let l = 0;
  let h = nums.length - 1;
  let mid;
  let ans = nums.length;

  while (l <= h) {
    mid = Math.floor((l + h) / 2);

    if (nums[mid] > target) {
      ans = mid;
      h = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return ans;
};

console.log(upperBound([1, 2, 3, 3, 5, 6, 7], 4));
