/**
 * @param {String} s
 * @return {number[]}
 */
var extract_number = function (s) {
  let arr = [];
  let num = "";

  for (let i = 0; i < s.length; i++) {
    while (s[i] >= "0" && s[i] <= "9") {
      num += s[i];
      i++;
    }
    console.log(num);

    if (num) {
      arr.push(+num);
      num = "";
    }
  }
  return arr;
};

console.log(extract_number("abc334v44d"));
