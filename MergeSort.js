function mergeSort(arr, low, high) {
  if (low >= high) {
    return;
  }

  let mid = Math.floor(low + high) / 2;

  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
  if (high - low + 1 === arr.length) {
    console.log(arr);
  }
}

function merge(arr, low, mid, high) {
  let temp = [];

  let left = low,
    right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

mergeSort([5, 1, 3, 2, 4], 0, 4);
