function bracketNumber(str) {
  let count = 0;
  let stack = [];
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      count++;
      stack.push(count);
      result.push(count);
    } else if (str[i] === ")") {
      result.push(stack.pop());
    }
  }

  return result;
}

console.log(bracketNumber("(aa(bdc))p(dee)"));
