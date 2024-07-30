class Node{
  constructor(key) {
    this.root = key;
    this.left = null;
    this.right = null;
  }
}

var Balanced = function(root) {
  if(root == null)return 0;

  let ls = Balanced(root.left)

  if(ls === -1)return -1

  let rs = Balanced(root.right)

  if(rs === -1 )return -1

  if(Math.abs(ls - rs) > 1) return -1

  return Math.max(ls,rs) + 1
};

function isBalanced(root){
  return Balanced(root) !== -1
}

let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.right.left = new Node(4)
root.right.right = new Node(5)
const Output = isBalanced(root)
console.log(Output);