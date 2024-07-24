class Node{
  constructor(key) {
    this.value = key;
    this.left = null;
    this.right = null;
  }
}

function binaryTree(root){
  if(root == null)return 0;
  console.log(root.value);
  let left = binaryTree(root.left)
  let right = binaryTree(root.right)  
}

let root = new Node(10)
root.left = new Node(20)
root.right = new Node(30)
root.right.left = new Node(50)
binaryTree(root); // Output :- 10 20 30 50 