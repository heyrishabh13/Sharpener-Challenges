class StackNode {
  constructor(a) {
    this.data = a;
    this.next = null;
  }
}

class MyStack {
  constructor() {
    this.top = null;
  }

  /**
   * @param {number} a
   */

  // Function to push an integer into the stack.
  push(a) {
    // code here
    let newNode = new StackNode(a);
    if (!this.top) this.top = newNode;
    else {
      let temp = this.top;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
  }

  /**
   */

  // Function to remove an item from top of the stack.
  pop() {
    if (!this.top) return -1;
    if (!this.top.next) {
      const val = this.top.data;
      this.top = null;
      return val;
    }

    let temp = this.top;
    let prev;
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }

    const val = temp.data;
    prev.next = null;
    return val;
    // code here
  }

  display() {
    let temp = this.top;
    let s = "";
    while (temp) {
      s += temp.data + " ";
      temp = temp.next;
    }
    console.log(s);
  }
}

const stack = new MyStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.display();
stack.pop();
stack.pop();
stack.display();
