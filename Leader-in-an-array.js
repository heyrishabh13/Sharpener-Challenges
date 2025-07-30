/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var leaders = function (nums) {
  let n = nums.length - 1;
  let ans = [];
  let temp;
  for (let i = n; i >= 0; i--) {
    if (i === n) {
      ans.push(nums[i]);
      temp = nums[i];
    } else {
      if (nums[i] > temp) {
        ans.push(nums[i]);
        temp = nums[i];
      }
    }
  }

  return ans.reverse();
};

console.log(leaders([1, 2, 3, 4, 5]));
