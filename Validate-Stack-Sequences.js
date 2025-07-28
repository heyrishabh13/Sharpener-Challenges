var validateStackSequences = function (pushed, popped) {
  let set = new Set();
  let arr = [];
  let n = pushed.length;
  let j = 0;
  let i = 0;
  while (i < n && j < n) {
    if (arr.length === 0 && pushed[i] <= popped[j]) {
      arr.push(pushed[i]);
      set.add(pushed[i]);
      i++;
    } else if (arr[arr.length - 1] === popped[j]) {
      let value = arr.pop();
      set.delete(value);
      j++;
    } else if (
      arr.length > 0 &&
      set.has(popped[j]) &&
      arr[arr.length - 1] > popped[j]
    ) {
      return false;
    } else {
      arr.push(pushed[i]);
      i++;
    }
  }
  //   console.log(arr);

  if (arr.length !== popped.length - j) {
    return false;
  }

  for (let i = j; i < popped.length; i++) {
    if (arr[arr.length - 1] === popped[i]) {
      arr.pop();
    } else {
      return false;
    }
  }
  return true;
};

console.log(validateStackSequences([0, 2, 1], [0, 1, 2]));
