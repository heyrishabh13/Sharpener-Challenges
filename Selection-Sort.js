function SelectionSort(arr, n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    let last = n - i - 1;
    let maxIndex = getMaxIndex(arr, 0, last);
    if (arr[maxIndex] > arr[last]) {
      swap(arr, maxIndex, last);
      count++;
    }
  }
  console.log(arr);
  console.log(count);
}

function swap(arr, first, second) {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}

function getMaxIndex(arr, start, end) {
  let max = start;
  for (let i = start; i <= end; i++) {
    if (arr[max] < arr[i]) {
      max = i;
    }
  }
  return max;
}

SelectionSort([10, 19, 6, 3, 5], 5);
