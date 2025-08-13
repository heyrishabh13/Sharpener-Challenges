function searchInSorted(arr, k) {
  // your code here
  let l = 0;
  let h = arr.length - 1;
  let mid;

  while (l <= h) {
    mid = Math.floor((l + h) / 2);
    if (arr[mid] > k) {
      h = mid - 1;
    } else if (arr[mid] < k) {
      l = mid + 1;
    } else {
      return true;
    }
  }
  return false;
}
let arr = [1, 2, 3, 4, 6],
  k = 6;
console.log(searchInSorted(arr, k));
