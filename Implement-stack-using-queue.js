var MyStack = function () {
  this.queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x);

  let rotate = this.queue.length;

  while (rotate) {
    this.queue.push(this.queue.shift());
    rotate--;
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.queue.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue[this.queue.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  if (this.queue.length === 0) {
    return true;
  }
  return false;
};

var obj = new MyStack();
obj.push(1);
obj.push(2);
var param_1 = obj.top();
var param_2 = obj.pop();
var param_3 = obj.empty();

console.log(param_1, param_2, param_3);
