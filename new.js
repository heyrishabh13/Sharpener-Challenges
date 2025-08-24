function maxLength(str) {
  let left = 0;
  let maxLength = 0;
  let map = new Map();
  for (let right = 0; right < str.length; right++) {
    if (map.has(str[right])) {
      left = Math.max(left, map.get(str[right]) + 1);
    }

    map.set(str[right], right);

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(maxLength("abcdeabcd"));
