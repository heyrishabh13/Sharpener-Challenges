function peakElement(arr) {
  // Code here
  let n = arr.length;
  if (n === 1) {
    return true;
  }
  if (arr[1] < arr[0] || arr[n - 2] < arr[n - 1]) {
    return true;
  }

  for (let i = 1; i < n - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      return true;
    }
  }

  return false;
}

console.log(peakElement([1, 2, 4, 5, 7, 8, 3]));
