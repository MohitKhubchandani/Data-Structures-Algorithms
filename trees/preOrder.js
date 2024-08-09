class Node{
  constructor(key) {
    this.value = key;
    this.left = null;
    this.right = null;
  }
}

var preorderTraversal = function(root , arr) {
  
  if(root == null)return;
  arr.push(root.value)
  preorderTraversal(root.left , arr)
  preorderTraversal(root.right ,arr)
};

var preorder = function(root){
  const arr = [];
  preorderTraversal(root , arr)
  return arr
}


// Input : - [1,null,2,3]
let root = new Node(1)
root.right = null
root.left = new Node(2)
root.left.right = new Node(3)
const Output = preorder(root);
console.log(Output); // Output :- [ 1, 2, 3 ]
