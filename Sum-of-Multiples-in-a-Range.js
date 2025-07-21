function sumOfMultiples(n, x) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % x === 0) {
      sum += i;
    }
  }
  console.log(sum);
}
