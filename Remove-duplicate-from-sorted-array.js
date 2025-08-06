function removeDuplicates(nums) {
  // Your logic here
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count++;
    }
  }

  return nums.length - count;
}

console.log(removeDuplicates([1, 1, 2]));
