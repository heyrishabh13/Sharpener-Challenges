var twoSum = function (nums, target) {
  let map = new Map();
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  console.log(map);

  for (let i = 0; i < nums.length; i++) {
    let num = target - nums[i];
    if (set.has(num)) {
      return [map.get(num), i];
    } else {
      set.add(nums[i]);
    }
    console.log(set);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
