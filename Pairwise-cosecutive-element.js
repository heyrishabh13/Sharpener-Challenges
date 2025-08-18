/**
 * @param {Stack} st
 * @returns {boolean}
 */

class Stack {
  constructor() {
    this.arr = [];
  }

  push(a) {
    this.arr.push(a);
  }

  pop() {
    this.arr.pop();
  }
  top() {
    let index = this.arr.length - 1;
    return this.arr[index];
  }
  empty() {
    if (this.arr.length != 0) return false;
    else return true;
  }
}

const st = new Stack();
st.push(15);
st.push(16);
// st.push(3);
// st.push(4);
// st.push(5);
// st.push(6);

class Solution {
  // Function to reverse the queue.
  pairWiseConsecutive(st) {
    // your code here
    let len = 0;
    let arr = [];
    while (!st.empty()) {
      len++;
      let ele = st.top();
      st.pop();
      arr.push(ele);
    }
    console.log(arr, len);
    if (len % 2 === 1) {
      for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] - arr[i + 1] !== 1) {
          return "No";
        }
      }
      return "Yes";
    } else {
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] - arr[i + 1] !== 1) {
          console.log(i);
          return "No";
        }
      }
      return "Yes";
    }

    for (let i = arr.length - 1; i >= 0; i--) {
      st.push(arr[i]);
    }
  }
}

const sol = new Solution();
console.log(sol.pairWiseConsecutive(st));
