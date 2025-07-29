var nextGreaterElements = function (nums) {
  let ans = Array(nums.length).fill(-1);

  let find = false;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        ans[i] = nums[j];
        find = true;
        break;
      } else {
        find = false;
      }
    }

    for (let j = 0; !find && j < (i + nums.length) % nums.length; j++) {
      if (nums[j] > nums[i]) {
        ans[i] = nums[j];
        find = true;
        break;
      } else {
        find = false;
      }
    }
  }
  return ans;
};

console.log(nextGreaterElements([1, 2, 1]));
console.log(nextGreaterElements([1, 5, 3, 6, 8]));
