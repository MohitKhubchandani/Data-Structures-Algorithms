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

var removeKdigits = function(num, k) {
    let stk = new Stack();
    for (let i = 0; i < num.length; i++) {
      while(!stk.isEmpty() && k > 0 && stk.top() - "0"> num[i] > "0"){
        stk.pop();
        k--
      }
      stk.push(num[i])
    }

    while(k > 0) {
      stk.pop();
       k--;
    }

    if (stk.isEmpty()) {
      return "0"
    };

    let res = "";
    while (!stk.isEmpty()) {
      res += stk.top();
      stk.pop();
    }

    while (res.length !== 0 && res.length - 1 == "0") {
      res.pop();
    }

    res.reverse();

    if(res.empty)return  "0";
    return res;
};