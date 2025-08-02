/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  //   let number = num.join("");
  //   number = +number;
  //   number = number + k;
  //   return number;

  return +num.join("") + k;
};

console.log(addToArrayForm([1, 2, 0, 0], 34));
