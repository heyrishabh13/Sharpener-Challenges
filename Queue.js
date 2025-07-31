class Queue {
  constructor() {
    this.q = [];
    this.front = -1;
    this.rear = -1;
  }

  enqueue(ele) {
    if (this.front === -1) {
      this.rear++;
      this.front++;
    } else {
      this.rear++;
    }
    this.q.push(ele);
  }

  dequeue() {
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front++;
    }
  }

  is_empty() {
    if (this.front === -1) {
      return true;
    } else {
      return false;
    }
  }

  get_first_element() {
    return this.q[this.front];
  }
}

let que = new Queue();
que.enqueue(5);
que.enqueue(10);
que.enqueue(15);
que.enqueue(25);
que.dequeue();
console.log(
  que.q,
  que.front,
  que.rear,
  que.is_empty(),
  que.get_first_element()
);
