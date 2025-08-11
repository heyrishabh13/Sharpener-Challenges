function sort012(arr) {
  // code here
  let zeroes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroes.push(arr[i]);
    }
  }

  let ones = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      ones.push(arr[i]);
    }
  }
  let twos = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      twos.push(arr[i]);
    }
  }

  return [...zeroes, ...ones, ...twos];
}

console.log(sort012([0, 1, 2, 0, 1, 2]));

// follow up approach

function sort012FollowUp(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      mid++;
      high--;
    }
  }

  return arr;
}

console.log(sort012FollowUp([0, 1, 2, 0, 1, 2]));
