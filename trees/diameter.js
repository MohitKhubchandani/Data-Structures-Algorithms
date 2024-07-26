class Node{
  constructor(key) {
    this.root = key;
    this.left = null;
    this.right = null;
  }
}

var diameterOfBinaryTree = function(root) {
  let ans = 0;
  
  function depth(node) {
      if (node == null) return 0;
      let leftDepth = depth(node.left);
      let rightDepth = depth(node.right);
      ans = Math.max(ans, leftDepth + rightDepth);
      return Math.max(leftDepth, rightDepth) + 1;
  }
  
  depth(root);
  return ans;
};


debugger
let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
const Output = diameterOfBinaryTree(root)
console.log(Output);