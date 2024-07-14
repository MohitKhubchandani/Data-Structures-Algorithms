class Stack{
  #arr;
  constructor() {
    this.#arr = []
  }

  push(element){
    return this.#arr.push(element);
  }

  pop(element){
    return this.#arr.pop(element);
  }

  top(element){
    return this.#arr[this.#arr.length - 1];
  }

  isEmpty(){
    return this.#arr.length == 0;
  }

  wholeStack(){
    return this.#arr;
  }
}

function removeStarsFromString(s){
  let stack = new Stack();
  for (let i = 0; i < s.length; i++) {
    if(s[i] !== "*")stack.push(s[i]);
    else if(stack)stack.pop()
  }
  return stack.wholeStack().join("");
}

const remstr = "lee**cod*e"
const Output = removeStarsFromString(remstr);
console.log(Output); // Output :- "lcoe"