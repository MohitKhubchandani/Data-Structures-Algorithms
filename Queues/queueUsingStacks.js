class QueueUsingStacks {
  constructor() {
      this.stack1 = [];
      this.stack2 = [];
  }


  enqueue(x) {
      this.stack1.push(x);
  }


  dequeue() {
      if (this.stack2.length === 0) {
          while (this.stack1.length > 0) {
              this.stack2.push(this.stack1.pop());
          }
      }
      return this.stack2.pop();
  }

 
  peek() {
      if (this.stack2.length === 0) {
          while (this.stack1.length > 0) {
              this.stack2.push(this.stack1.pop());
          }
      }
      return this.stack2[this.stack2.length - 1];
  }


  isEmpty() {
      return this.stack1.length === 0 && this.stack2.length === 0;
  }


  size() {
      return this.stack1.length + this.stack2.length;
  }
}


let queue = new QueueUsingStacks();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue.peek());  // Outputs: 1
console.log(queue.dequeue());  // Outputs: 1
console.log(queue.size());  // Outputs: 3
console.log(queue.peek());  // Outputs: 2
console.log(queue.isEmpty());  // Outputs: false
