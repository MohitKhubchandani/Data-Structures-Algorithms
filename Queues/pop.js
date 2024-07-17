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

  log(){
    return this.#arr
  }
}

const queue = new Queue();
queue.push("1")
queue.push("2")
queue.push("3")
queue.push("4")
queue.pop()
queue.pop()
const Output = queue.log();
console.log(Output); // Output :- [ '3', '4' ]