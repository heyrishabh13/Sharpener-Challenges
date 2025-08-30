function subarrayOfLengthK(arr, k) {
  let sum = 0;
  let maxSum = 0;

  for (let r = 0; r < k; r++) {
    sum += arr[r];
  }

  for (let l = 0, r = k; r < arr.length; l++, r++) {
    sum -= arr[l];
    sum += arr[r];

    maxSum = Math.max(sum, maxSum);
  }
  return maxSum;
}

let arr = [10, 20, -30, -40, 50, 60];
console.log(subarrayOfLengthK(arr, 4));
