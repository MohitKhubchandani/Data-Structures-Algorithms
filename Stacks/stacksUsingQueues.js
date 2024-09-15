class Stack {
  constructor() {
      this.queue = [];
  }

  push(x) {
      this.queue.push(x);
      for (let i = 0; i < this.queue.length - 1; i++) {
          this.queue.push(this.queue.shift());
      }
  }

  pop() {
      return this.queue.shift();
  }

  top() {
      return this.queue[0];
  }

  size() {
      return this.queue.length;
  }
}

let stk = new Stack()
stk.push(1);
stk.push(2);
stk.push(3);
stk.push(4);

console.log(stk.pop()); // Outputs: 4
console.log(stk.size()); // Outputs: 3
console.log(stk.top()); // Outputs: 3


