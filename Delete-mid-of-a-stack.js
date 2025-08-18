class Solution {
  deleteMid(s) {
    // code here
    let stack = [];
    let len = s.length;

    while (s.length > 0) {
      stack.push(s.pop());
    }

    let mid = Math.ceil(len / 2);
    console.log(mid);
    let count = 0;
    while (stack.length > 0) {
      count++;
      if (count === mid) {
        stack.pop();
      } else {
        s.push(stack.pop());
      }
    }

    return s;
  }
}

let sol = new Solution();

console.log(sol.deleteMid([10, 20, 30, 40, 50]));
