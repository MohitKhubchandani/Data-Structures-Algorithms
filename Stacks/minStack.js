
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if(this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]){
    this.minStack.push(val);  
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const popvalue = this.stack.pop();
    if(popvalue === this.minStack[this.minStack.length - 1]){
      this.minStack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1 ]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1 ]
};


let stk = new MinStack()
stk.push(10)
stk.push(20)
stk.push(30)
stk.push(40)
stk.push(50)
stk.pop()
console.log(stk); // Output :- MinStack { stack: [ 10, 20, 30, 40 ], minStack: [ 10 ] }
