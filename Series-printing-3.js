function print_series(n) {
  let a = 0;
  let b = 1;
  let num = a + b;
  if (n === 0) {
    num = 0;
  } else if (n === 1) {
    num = 1;
  } else if (n === 2) {
    num = 1;
  }
  for (let i = 3; i <= n; i++) {
    a = b;
    b = num;
    num = a + b;
  }
  console.log(num);
}

print_series(30);
