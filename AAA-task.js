/**
 * @param {string[]} sentences
 * @return {string[]}
 */
var AAA_sort = function (sentences) {
  return sentences.sort((a, b) => {
    const countA = count(a);
    const countB = count(b);

    if (countA !== countB) {
      return countB - countA;
    }

    return b.length - a.length;
  });
};

function count(str) {
  let count = 0;
  for (let char of str) {
    if (char === "a") {
      count++;
    }
  }
  return count;
}

console.log(AAA_sort(["vaibhav", "almanac", "is", "fat", "button", "aabaca"]));
