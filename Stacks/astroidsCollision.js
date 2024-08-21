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

  log(){
    return this.#arr
  }
};

function stackUp(element){
  let stk = new Stack();
  for (let i = 0; i < element.length; i++) {
    stk.push(element[i])
  }
  return stk.log();
}


const array = [10,5,4,-2];
const Output = stackUp(array);
console.log(Output) // Output :- [ 10, 5, 4, -2 ]
