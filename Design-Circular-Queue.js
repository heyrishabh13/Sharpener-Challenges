/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.q = [];
  this.front = -1;
  this.rear = -1;
  this.len = k;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.front === -1 && this.rear === -1) {
    this.front++;
    this.rear++;
    this.q.push(value);
    return true;
  } else {
    let previousRear = this.rear;
    this.rear = (this.rear + 1) % this.len;
    if (this.front === this.rear) {
      this.rear = previousRear;
      return false;
    }
    if (this.rear > this.front) {
      this.q.push(value);
    } else {
      this.q[this.rear] = value;
    }
    return true;
  }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.q.length === 1) {
    this.front = -1;
    this.rear = -1;
    return true;
  }

  let previousFront = this.front;
  this.front = (this.front + 1) % this.len;
  if (this.front === this.rear || this.front === -1) {
    this.front = -1;
    this.rear = -1;
    return false;
  } else {
    return true;
  }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.q[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  return this.q[this.rear];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  if (this.front === -1) {
    return true;
  }
  return false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  if (this.rear === this.len - 1 && this.front === 0) {
    return true;
  }
  return false;
};

var obj = new MyCircularQueue(6);
var param_1 = obj.enQueue(6);
var param_2 = obj.Rear();
var param_3 = obj.Rear();
var param_4 = obj.deQueue();
var param_5 = obj.enQueue(5);
var param_6 = obj.Rear();
var param_7 = obj.deQueue();
console.log(obj.q, param_7, obj.front, obj.rear);
var param_8 = obj.Front();
console.log(obj.q, param_8, obj.front, obj.rear);
var param_9 = obj.deQueue();
var param_10 = obj.deQueue();
var param_11 = obj.deQueue();

// console.log(obj.q);
console.log(
  param_1,
  param_2,
  param_3,
  param_4,
  param_5,
  param_6,
  param_7,
  param_8,
  param_9,
  param_10,
  param_11
);
