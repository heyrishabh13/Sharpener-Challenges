var MyQueue = function () {
  this.pushArr = [];
  this.popArr = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.pushArr.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.pushArr.length > 0) {
    this.popArr.push(this.pushArr.pop());
  }

  return this.popArr.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.popArr.length > 0) {
    return this.popArr[this.popArr.length - 1];
  } else {
    while (this.pushArr.length > 0) {
      this.popArr.push(this.pushArr.pop());
    }
    return this.popArr[this.popArr.length - 1];
  }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  if (this.popArr.length === 0 && this.pushArr.length === 0) {
    return true;
  } else {
    return false;
  }
};

let obj = new MyQueue();
obj.push(1);
obj.push(2);
const param1 = obj.peek();
const param2 = obj.pop();
const param3 = obj.empty();
// const param3 = obj.pop();
// const param4 = obj.peek();
// const param6 = obj.peek();
// const param7 = obj.pop();
// const param8 = obj.empty();

// console.log(param1, param2, param3, param4, param5, param6, param7, param8);
console.log(param1, param2, param3);
