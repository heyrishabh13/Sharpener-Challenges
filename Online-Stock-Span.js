var StockSpanner = function () {
  this.stockSpanner = [];
};

StockSpanner.prototype.next = function (price) {
  this.stockSpanner.push(price);
  console.log(this.stockSpanner);
  let count = 0;
  if (this.stockSpanner.length === 1) {
    return 1;
  }

  let i = this.stockSpanner.length - 1;
  while (i >= 0) {
    if (
      this.stockSpanner[i] <= this.stockSpanner[this.stockSpanner.length - 1]
    ) {
      count++;
    } else {
      break;
    }
    i--;
  }
  return count;
};

var obj = new StockSpanner();
var param_1 = obj.next(31);
var param_2 = obj.next(41);
var param_3 = obj.next(48);
var param_4 = obj.next(59);
var param_5 = obj.next(79);
// var param_6 = obj.next(75);
// var param_7 = obj.next(85);

console.log(param_1, param_2, param_3, param_4, param_5);
