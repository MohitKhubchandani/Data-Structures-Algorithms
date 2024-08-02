class Node{
  constructor(key) {
    this.root = key;
    this.left = null;
    this.right = null;
  }
}

let ans = 0
var diameterOfBinaryTree = function(root) {
    if(!root)return 0;
    let ls = diameterOfBinaryTree(root.left)
    let rs = diameterOfBinaryTree(root.right)
    ans = 1 + ls + rs;
    return ans
};


debugger
let root = new Node(4)
root.left = new Node(8)
root.left.left = null 
root.right = new Node(5)
root.right.left = new Node(86)
root.right.right = new Node(886)
const Output = diameterOfBinaryTree(root)
console.log(Output);