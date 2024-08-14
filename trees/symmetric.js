                            
// Node structure for the binary tree
class Node {
  constructor(key) {
      this.value = key;
      this.left = null;
      this.right = null;
  }
}


var isSymmetricUtil = function(root1, root2) {
  if (root1 === null || root2 === null) {
      return root1 === root2;
  }
  if (root1.value !== root2.value) {
      return false;
  }
  return isSymmetricUtil(root1.left, root2.right) && isSymmetricUtil(root1.right, root2.left);
};

var isSymmetric = function(root) {
  if (root == false) {
      return true;
  }
  return isSymmetricUtil(root.left, root.right);
};


debugger
// Creating a sample binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right.right = new Node(3);
root.right.left = new Node(4);

const solution = isSymmetric(root);
console.log(solution); // Output :- true