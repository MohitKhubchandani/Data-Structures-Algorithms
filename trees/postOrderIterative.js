class Node{
  constructor(key) {
    this.value = key;
    this.left = null;
    this.right = null;
  }
};


function postorderIterative(root){
  if(root == null)return [];
  let stk1 = [];
  let stk2 = [];
  stk1.push(root);
  while(stk1.length !== 0){
    let node = stk1.pop();
    stk2.push(node.value);
    
    if(node.left !== null){
      stk1.push(node.left);
    }
    if(node.right !== null){
      stk1.push(node.right);
    }
  }
  return stk2.reverse();
}

// Input : - [1,null,2,3]
let root = new Node(1);
root.right = null
root.left = new Node(2);
root.left.right = new Node(3);
const Output = postorderIterative(root);
console.log(Output); // Output :- [ 3, 2, 1 ]