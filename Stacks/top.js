class Stack{
  #arr
  constructor() {
    this.#arr = []
  }

  push(element){
    this.#arr.push(element)
  }

  pop(element){
    return this.#arr.pop();
  }

  top(element){
    return this.#arr[this.#arr.length - 1]
  }
}

const stk = new Stack();
stk.push("10")
stk.push("20")
stk.push("30")
stk.push("40")
stk.pop()
const Output = stk.top();
console.log(Output); // Output :- 30