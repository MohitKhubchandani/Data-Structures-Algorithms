class Queue{
  #arr
  constructor() {
    this.#arr = []
  }

  push(element){
    this.#arr.push(element)
  }

  pop(){
    return this.#arr.shift()
  }

  front(){
    return this.#arr[0];
  }

  log(){
    return this.#arr
  }
}

const queue = new Queue();
queue.push("1")
queue.push("2")
queue.push("3")
queue.push("4")
const Output = queue.front();
console.log(Output); // Output :- 1