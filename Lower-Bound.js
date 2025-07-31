/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var lowerBound = function (nums, target) {
  let l = 0;
  let h = nums.length - 1;
  let mid;
  let ans = nums.length;

  while (l <= h) {
    mid = Math.floor((l + h) / 2);

    if (target < nums[mid]) {
        ans = mid;
      h = mid - 1;
    } else if (target > nums[mid]) {
      l = mid + 1;
    } else {
      ans = mid;
      h = mid - 1;
    }
  }
  return ans;
};

console.log(lowerBound([1, 2, 3, 3, 5, 6, 8], 3));
