function isSubset(a, b) {
  // Your code here

  if (b.length > a.length) {
    return false;
  }

  let mapA = new Map();

  for (let num of a) {
    mapA.set(num, (mapA.get(num) || 0) + 1);
  }

  let mapB = new Map();
  for (let num of b) {
    mapB.set(num, (mapB.get(num) || 0) + 1);
  }

  return checkSimilarity(mapA, mapB);
}

function checkSimilarity(mapA, mapB) {
  for (let [key, value] of mapB) {
    if (!mapA.has(key) || mapA.get(key) < value) {
      false;
    }
  }
  return true;
}
const a = [11, 7, 1, 13, 21, 3, 7, 3],
  b = [11, 3, 7, 1, 7];
console.log(isSubset(a, b));
