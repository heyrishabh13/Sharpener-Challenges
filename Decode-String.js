var decodeString = function (s) {
  let stack = [];
  let nums = [];
  let n = s.length;

  let numStr = "";

  for (let i = 0; i < n; i++) {
    if (s[i] >= "0" && s[i] <= "9") {
      numStr += s[i];
      continue;
    }

    if (s[i] === "]") {
      let str = "";
      while (stack[stack.length - 1] !== "[") {
        let value = stack.pop();
        str += value;
      }
      //   console.log(str);
      stack.pop();

      str = str.repeat(nums[nums.length - 1]);

      nums.pop();

      str = str.split("").reverse().join("");
      for (let j = 0; j < str.length; j++) {
        stack.push(str[j]);
      }
      //   console.log(stack);
    } else {
      stack.push(s[i]);

      if (+numStr > 0) {
        nums.push(+numStr);
        numStr = "";
      }

    //   console.log(nums);
    }
  }

  let ans = "";

  for (let i = 0; i < stack.length; i++) {
    ans += stack[i];
  }

  return ans;
};

console.log(decodeString("100[leetcode]"));
