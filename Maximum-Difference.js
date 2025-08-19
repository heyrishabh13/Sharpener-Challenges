class Solution {
  findMaxDiff(arr) {
    // code here
    const n = arr.length;
    const leftSmaller = new Array(n).fill(0);
    const rightSmaller = new Array(n).fill(0);
    const stack = [];

    // Find nearest smaller element on the left
    for (let i = 0; i < n; i++) {
      while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
        stack.pop();
      }
      if (stack.length > 0) {
        leftSmaller[i] = arr[stack[stack.length - 1]];
      }
      stack.push(i);
    }

    // Clear stack for right smaller elements
    stack.length = 0;

    // Find nearest smaller element on the right
    for (let i = n - 1; i >= 0; i--) {
      while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
        stack.pop();
      }
      if (stack.length > 0) {
        rightSmaller[i] = arr[stack[stack.length - 1]];
      }
      stack.push(i);
    }

    // Calculate maximum absolute difference
    let maxDiff = 0;
    for (let i = 0; i < n; i++) {
      maxDiff = Math.max(maxDiff, Math.abs(leftSmaller[i] - rightSmaller[i]));
    }

    return maxDiff;
  }
}
