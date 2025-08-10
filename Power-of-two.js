function isPowerOfTwo(n) {
  if (n === 0) {
    return false;
  }

  if (n >> 1 === 1) {
    let count = 1;
    while (n > 0) {
      if (n >> 1 === 1) {
        count++;
      }
      n = n >> 1;
    }
    if (count > 1) {
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
}

console.log(isPowerOfTwo(3));
