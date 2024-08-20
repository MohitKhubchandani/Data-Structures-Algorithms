class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }

  push(element) {
    let temp = new Node(element);
    if (this.end === null) {
      this.start = this.end = temp;
    } else {
      this.end.next = temp;
      this.end = temp;
    }
    this.size++;
  }

  pop() {
    if (this.start === null) {
      return null;
    }
    let temp = this.start;
    this.start = this.start.next;
    if (this.start === null) {
      this.end = null;
    }
    this.size--;
    return temp.data;
  }

  peek() {
    if (this.start === null) {
      return null;
    }
    return this.start.data;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}


let queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);

console.log(queue.peek()); // Outputs: 1
queue.pop();
console.log(queue.peek()); // Outputs: 2
