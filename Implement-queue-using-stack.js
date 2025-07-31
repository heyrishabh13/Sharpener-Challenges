var MyQueue = function () {
  this.stack = [];
  this.front = -1;
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  if (this.front === -1) {
    this.front++;
  }
  this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  let previousFront = this.front++;
  return this.stack[previousFront];
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.stack[this.front];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  if (this.front === -1 || this.front > this.stack.length - 1) {
    return true;
  } else {
    return false;
  }
};

var obj = new MyQueue();
obj.push(5);
obj.push(6);
obj.push(7);
var param_1 = obj.pop();
var param_2 = obj.peek();
var param_3 = obj.pop();
var param_4 = obj.peek();
var param_5 = obj.empty();
var param_6 = obj.peek();
var param_7 = obj.pop();
var param_8 = obj.empty();
console.log(obj.stack, obj.front);
// var param_3 = obj.pop();
// var param_4 = obj.empty();

console.log(
  param_1,
  param_2,
  param_3,
  param_4,
  param_5,
  param_6,
  param_7,
  param_8
);
