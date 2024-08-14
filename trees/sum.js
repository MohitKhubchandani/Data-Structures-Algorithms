class Node{
  constructor(key) {
    this.value = key;
    this.left = null;
    this.right = null;
  }
}


var sum = function(root) {

      if (root == null) return 0;
      let left = sum(root.left);
      let right = sum(root.right);
      return root.value + left + right;
};


let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
const Output = sum(root)
console.log(Output); // Output :- 6