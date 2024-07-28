class Node{
  constructor(key) {
    this.value = key;
    this.left = null;
    this.right = null;
  }
}

var inorder = function(root , arr) {
  if(root == null)return
  inorder(root.left , arr);
  arr.push(root.value);
  inorder(root.right , arr);
};

var inorderTraversal = function(root){
  let arr = [];
  inorder(root,arr)
  return arr;
}
debugger
// Input : - [1,null,2,3]
let root = new Node(1)
root.left = null
root.right = new Node(2)
root.right.left = new Node(3)
const Output = inorderTraversal(root);
console.log(Output); // Output :- [ 1, 3, 2 ]