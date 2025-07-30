var trap = function (height) {
  let maxLeft = Array(height.length).fill(0);
  let maxRight = Array(height.length);

  maxLeft[0] = height[0];
  for (let i = 1; i < maxLeft.length; i++) {
    if (height[i] > maxLeft[i - 1]) {
      maxLeft[i] = height[i];
    } else {
      maxLeft[i] = maxLeft[i - 1];
    }
  }

  maxRight[maxRight.length - 1] = height[height.length - 1];

  for (let i = maxRight.length - 2; i >= 0; i--) {
    if (height[i] > maxRight[i + 1]) {
      maxRight[i] = height[i];
    } else {
      maxRight[i] = maxRight[i + 1];
    }
  }

  if (height.length < 3) {
    return 0;
  }

  let total = 0;

  for (let i = 1; i < height.length - 1; i++) {
    total += findMin(maxLeft[i], maxRight[i]) - height[i];
    // console.log(maxLeft[i], maxRight[i]);
  }

  return total;
};

function findMin(num1, num2) {
  return num1 < num2 ? num1 : num2;
}

console.log(trap([4, 2, 0, 3, 2, 5]));
