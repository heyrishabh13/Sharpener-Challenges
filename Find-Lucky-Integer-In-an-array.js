var findLucky = function (arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      let value = map.get(arr[i]);
      map.set(arr[i], value + 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  console.log(map);

  let max = -1;
  for (let [key, value] of map) {
    if (key === value && key > max) {
      max = key;
    }
  }
  return max;
};

console.log(findLucky([2, 2, 2, 3, 3]));
