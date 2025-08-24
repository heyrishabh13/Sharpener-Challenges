class MyQueue {
  constructor() {
    this.front = 0;
    this.rear = 0;
    this.arr = new Array(100005);
  }

  /**
   * @param {number} x
   */

  // Function to push an element x in a queue.
  push(x) {
    // Your code here
    this.arr[this.rear] = x;
    this.rear++;
  }

  /**
   * @returns {number}
   */

  // Function to pop an element from queue and return that element.
  pop() {
    if (this.front !== this.rear) {
      return this.arr[this.front++];
    }
    // Your code here
    else {
      return -1;
    }
  }
  display() {
    console.log(this.arr);
  }
}

const queue = new MyQueue();
queue.push(3);
console.log(queue.pop());
console.log(queue.pop());
queue.push(4);
// queue.display();
// queue.push(4);
// console.log(queue.pop());
