function rearrange(arr) {
  // Separate positive and negative numbers
  let pos = [];
  let neg = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      pos.push(arr[i]);
    } else {
      neg.push(arr[i]);
    }
  }

  // Alternate positive and negative numbers
  let result = [];
  let j = 0; // Index for pos array
  let k = 0; // Index for neg array

  while (j < pos.length && k < neg.length) {
    result.push(pos[j++]); // Add positive number
    result.push(neg[k++]); // Add negative number
  }

  // Add remaining positive numbers, if any
  while (j < pos.length) {
    result.push(pos[j++]);
  }

  // Add remaining negative numbers, if any
  while (k < neg.length) {
    result.push(neg[k++]);
  }

  return result;
}
console.log(rearrange([9, 4, -2, -1, 5, 0, -5, -3, 2]));
