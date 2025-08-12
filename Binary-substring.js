function binarySubstring(s) {
  // code here
  let str;
  let subStrings = [];

  for (let i = 0; i < s.length; i++) {
    str = "";
    for (let j = i; j < s.length; j++) {
      str += s[j];
      subStrings.push(str);
    }
  }
  console.log(subStrings);

  let count = 0;
  for (let i = 0; i < subStrings.length; i++) {
    let str = subStrings[i];
    if (str.length >= 2 && str[0] === "1" && str[str.length - 1] === "1") {
      count++;
    }
  }

  return count;
}

console.log(binarySubstring("1111"));
