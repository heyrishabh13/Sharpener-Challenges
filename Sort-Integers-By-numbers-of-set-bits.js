var sortByBits = function (arr) {
  arr.sort((x, y) => {
    let countx = count(x);
    let county = count(y);

    console.log(countx, county);

    if (countx === county) {
      return x - y;
    } 
    return countx - county;
  });

  return arr;
};

function count(num) {
  let count = 0;

  while(num > 0){
    count += num & 1;
    num >>= 1;
  }
  return count;
}

console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
