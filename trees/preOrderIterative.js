class Stack{
  #arr
  constructor() {
    this.#arr = []
  }

  push(element){
    this.#arr.push(element)
  }
  
}

class node{
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

var preOrderIterative = function(root){
  let stack = [root];
  let preorder = [];
  while(stack.length !== 0){
    let node = stack.pop();
    preorder.push(node.val);
    if(node.right !== null)stack.push(node.right);
    if(node.left !== null)stack.push(node.left);
  }
  return preorder;
}

debugger
let root = new node(1);
root.left = new node(2);
root.right = new node(7);
root.left.left = new node(3);
root.left.right = new node(4);
root.left.right.left = new node(5);
root.left.right.right = new node(6);
const Output = preOrderIterative(root)
console.log(Output); // Output :- [ 1, 2, 3, 4, 5, 6, 7 ]