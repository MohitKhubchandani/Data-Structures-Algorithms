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

var StockSpanner = function() {

};


StockSpanner.prototype.next = function(price) {
    
};