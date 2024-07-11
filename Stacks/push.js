class Stack{
  #arr
  constructor() {
    this.#arr = []
  }

  push(element){
    this.#arr.push(element)
  }
  
  log(){
    return this.#arr
  }
}

const stk = new Stack();
stk.push("10")
stk.push("20")
stk.push("30")
stk.push("40")
const Output = stk.log();
console.log(Output); // Output :- [ '10', '20', '30', '40' ]