class Stack{
  #arr
  constructor() {
    this.#arr = []
  }

  push(element){
    this.#arr.push(element)
  }

  pop(element){
    this.#arr.pop(element)
  }

  top(element){
    return this.#arr[this.#arr.length - 1];
  }

  isEmpty(){
    return this.#arr.length == 0;
  }
}

let stk = new Stack();
stk.push(10);
console.log(stk.isEmpty());
stk.pop()
console.log(stk.isEmpty());