class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(element) {
    let temp = new Node(element);
    temp.next = this.top;
    this.top = temp;
    this.size++;
  }

  pop() {
    if (this.top === null) {
      return null;
    }
    let temp = this.top;
    this.top = this.top.next;
    this.size--;
    return temp.data;
  }

  peek() {
    if (this.top === null) {
      return null;
    }
    return this.top.data;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}


let stk = new Stack()
stk.push(1);
stk.push(2);
stk.push(3);
stk.push(4);

console.log(stk.peek());
stk.pop()
console.log(stk.peek());