function findMissing(arr) {
  // code here
  let map = new Map();

  for (let i = arr.length - 1; i >= 1; i--) {
    let r = arr[i] - arr[i - 1];
    map.set(r, (map.get(r) || 0) + 1);
  }

  let maxR = -Infinity;
  let ans;

  for (let [key, value] of map) {
    if (value > maxR) {
      maxR = value;
      ans = key;
    }
  }

  for (let i = 1; i < arr.length; i++) {
    let result = arr[i - 1] + ans;
    if (arr[i] !== result) {
      return result;
    }
  }

  return arr[arr.length - 1] + ans;
}

console.log(findMissing([1, 6, 11, 16, 21, 31]));
