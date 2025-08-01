function stringConvert() {
  let str = "HelloRishabhHowAreYou";
  let ans = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      ans += " ";
    }
    ans += str[i];
  }

  return ans;
}

console.log(stringConvert());
