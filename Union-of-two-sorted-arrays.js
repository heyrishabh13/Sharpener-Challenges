function findUnion(a, b) {
  // code here
  let i = 0;
  let j = 0;

  let result = [];
  let set = new Set();

  while (i < a.length && j < b.length) {
    if (!set.has(a[i]) && !set.has(b[j])) {
      if (a[i] < b[j]) {
        result.push(a[i]);
        set.add(a[i]);
        i++;
      } else if (b[j] < a[i]) {
        result.push(b[j]);
        set.add(b[j]);
        j++;
      } else {
        set.add(a[i]);
        result.push(a[i++]);
        j++;
      }
    } else if (!set.has(a[i]) && set.has(b[j])) {
      j++;
    } else if (set.has(a[i]) && !set.has(b[j])) {
      i++;
    } else {
      i++;
      j++;
    }
  }

  while (i < a.length) {
    if (!set.has(a[i])) {
      result.push(a[i]);
      set.add(a[i++]);
    }
  }
  while (j < b.length) {
    if (!set.has(b[j])) {
      result.push(b[j]);
      set.add(b[j]);
      j++;
    }
  }
  //   console.log(set);
  return result;
}

const a = [1, 2, 3, 4, 5],
  b = [1, 2, 3, 6, 7];
console.log(findUnion(a, b));
