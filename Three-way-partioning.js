function threeWayPartition(arr, a, b) {
  // your code here
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid < arr.length) {
    while (arr[low] < a) {
      low++;
    }
    while (arr[high] > b) {
      high--;
    }
    console.log(low, high);
    if (arr[mid] < a) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] > b) {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      
    } else {
      mid++;
    }
  }
  return arr;
}

const arr = [1, 2, 3, 3, 4],
  a = 1,
  b = 2;
console.log(threeWayPartition(arr, a, b));
