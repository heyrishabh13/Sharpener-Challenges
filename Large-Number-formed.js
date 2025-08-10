function formLargestNumber(arr) {
  //write your implementation here
  const newArr = arr.map(String);
  newArr.sort((a, b) => (b + a).localeCompare(a + b));
  console.log(newArr);
  if (newArr[0] === "0") {
    return "0";
  }
  return newArr.join("");
}

const input = [3, 30, 34, 5, 9];
console.log(formLargestNumber(input));
