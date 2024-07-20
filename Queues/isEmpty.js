class Queue{
  #arr
  constructor() {
    this.#arr = []
  }

  push(element){
    this.#arr.push(element)
  }

  pop(element){
    this.#arr.shift(element)
  }

  log(){
    return this.#arr
  }

  isEmpty(){
    return this.#arr.length == 0
  }
}

const queue = new Queue();
queue.push(10)
queue.push(20)
console.log(queue.isEmpty());
queue.pop()
queue.pop()
console.log(queue.isEmpty()); // Output :- false true