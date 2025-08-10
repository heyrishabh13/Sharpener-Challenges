function generateFibonacci(n) {
  let first = 0;
  let second = 1;
  let ans = [0, 1];

  for (let i = 3; i <= n; i++) {
    let result = ans[i - 3] + ans[i - 2];
    ans.push(result);
  }
  return ans;
}

console.log(generateFibonacci(5));
