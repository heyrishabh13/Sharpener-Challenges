function generateFibonacci(n) {
  if (n === 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }
  let ans = [0, 1];

  for (let i = 3; i <= n; i++) {
    let result = ans[i - 3] + ans[i - 2];
    ans.push(result);
  }
  return ans;
}

console.log(generateFibonacci(8));
