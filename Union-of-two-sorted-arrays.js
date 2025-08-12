function findUnion(a, b) {
  let arr = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    let x = a[i];
    let y = b[j];

    if (i > 0 && i < a.length && a[i] == a[i - 1]) {
      i++;
      continue;
    }

    if (j > 0 && j < b.length && b[j] == b[j - 1]) {
      j++;
      continue;
    }

    if (x < y) {
      arr.push(x);
      i++;
    } else if (x > y) {
      arr.push(y);
      j++;
    } else {
      arr.push(x);
      i++;
      j++;
    }
  }
  while (i < a.length) {
    if (i == 0 || a[i] !== a[i - 1]) arr.push(a[i]);
    i++;
  }
  while (j < b.length) {
    if (j == 0 || b[j] !== b[j - 1]) arr.push(b[j]);
    j++;
  }

  return arr;
}
const a = [1, 2, 3, 4, 5],
  b = [1, 2, 3, 6, 7];
console.log(findUnion(a, b));
