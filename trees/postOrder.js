class Node{
  constructor(key) {
    this.value = key;
    this.left = null;
    this.right = null;
  }
}

var postorder = function(root , arr) {
  if(root == null)return;
  postorder(root.left , arr)
  postorder(root.right , arr);
  arr.push(root.value)
};

var postorderTraversal = function(root){
  let arr = [];
  postorder(root , arr);
  return arr;
}

// Input : - [1,null,2,3]
let root = new Node(1)
root.right = null
root.left = new Node(2)
root.left.right = new Node(3)
const Output = postorderTraversal(root);
console.log(Output); // Output :- [ 3, 2, 1 ]