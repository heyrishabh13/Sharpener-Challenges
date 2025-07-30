var largestRectangleArea = function (heights) {
  let n = heights.length;
  let left = Array(n),
    right = Array(n);

  let mystack = [];
  for (
    let i = 0;
    i < n;
    ++i //Fill left
  ) {
    if (mystack.length === 0) {
      left[i] = 0;
      mystack.push(i);
    } else {
      while (
        mystack.length !== 0 &&
        heights[mystack[mystack.length - 1]] >= heights[i]
      )
        mystack.pop();
      left[i] = mystack.length === 0 ? 0 : mystack[mystack.length - 1] + 1;
      mystack.push(i);
    }
  }
  while (mystack.length !== 0)
    //Clear stack
    mystack.pop();

  for (
    let i = n - 1;
    i >= 0;
    --i //Fill right
  ) {
    if (mystack.length === 0) {
      right[i] = n - 1;
      mystack.push(i);
    } else {
      while (
        mystack.length !== 0 &&
        heights[mystack[mystack.length - 1]] >= heights[i]
      )
        mystack.pop();
      right[i] = mystack.length === 0 ? n - 1 : mystack[mystack.length - 1] - 1;
      mystack.push(i);
    }
  }
  let mx_area = -Infinity; //Stores max_area
  for (let i = 0; i < n; ++i)
    mx_area = max(mx_area, heights[i] * (right[i] - left[i] + 1));
  return mx_area;
};

function max(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
