function isPowerOfThree(n) {
  let ans = 1;
  let i = 1;

  for (let i = 1; ans <= n; i++) {
    ans *= 3;
    if (ans === n) {
      return true;
    }
  }

  return false;
}

console.log(isPowerOfThree(0));

const n = 6;

console.log(Math.pow(2, 0));
