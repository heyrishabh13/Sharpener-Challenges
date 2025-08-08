let arr = [3, 1, 2];
let n = 3;

function printF(ind, ans) {
  if (ind === n) {
    if (ans.length !== 0) {
      console.log(ans);
    }
    return;
  }
  ans.push(arr[ind]);
  printF(ind + 1, ans);
  ans.pop();
  printF(ind + 1, ans);
}

printF(0, []);
