// var StockSpanner = function() {

// };

/**
 * @param {number} price
 * @return {number}
 */
// StockSpanner.prototype.next = function(price) {
//     console.log(price)
// };

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

class StockSpanner {
  constructor() {
    this.stack = []
    this.length = 0
  }

  isEmpty() {
    return this.length === 0 ? true : false
  }

  push(item) {
    this.stack.push(item)
    this.length++
  }

  pop() {
    this.stack.pop()
    this.length--
  }

  peek() {
    return this.stack[this.length - 1]
  }

  next(price) {
    let span = 1
    while (!this.isEmpty() && price >= this.peek()[0]) {
      span += this.peek()[1]
      this.pop()
    }
    this.push([price, span])
    return span
  }
}

var obj = new StockSpanner()
obj.next(100)
obj.next(80)
obj.next(60)
obj.next(70)
obj.next(60)
obj.next(75)
obj.next(85)
// console.log(obj.peek())
console.log(obj)
// var param_1 = obj.next(price)
