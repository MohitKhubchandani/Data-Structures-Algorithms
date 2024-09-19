class Stack{
  #arr
  constructor() {
    this.#arr = []
  }

  push(element){
   return this.#arr.push(element)
  }

  pop(element){
    return this.#arr.pop(element)
  }

  top(element){
    return this.#arr[this.#arr.length - 1];
  }

  isEmpty(){
    return this.#arr.length == 0;
  }
};

function validParenteses(s){
  let stk = new Stack();
  for (let i = 0; i < s.length; i++) {
    if(s[i] == "(" || s[i] == "{" || s[i] == "["){
      stk.push(s[i])
    }else {
      if(stk.isEmpty()) return false;
    
    let ch = stk.pop();
    if(s[i] == ")" && ch == "(" || s[i] == "}" && ch == "{" || s[i] == "]" && ch == "["){}
    else return false;
  }}
  return stk.isEmpty();
}

debugger
const str = "[{()}]"
const Output = validParenteses(str);
console.log(Output);