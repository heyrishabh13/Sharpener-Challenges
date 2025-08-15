function permutation(str) {
  let ans = [];
  permute(str.split(""), 0, ans);

  return ans;
}

function permute(arr, index, ans) {
  if (index === arr.length) {
    let value = arr.join("");
    if (value !== "") {
      ans.push(value);
    }
    return;
  }

  for (let i = index; i < arr.length; i++) {
    [arr[index], arr[i]] = [arr[i], arr[index]];
    permute(arr, index + 1, ans);
    [arr[index], arr[i]] = [arr[i], arr[index]];
  }
}

console.log(permutation("abc"));
