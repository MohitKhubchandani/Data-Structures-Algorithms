
class Node {
  constructor(key) {
    this.value = key;
    this.left = null;
    this.right = null;
  }
}

var inorderTraversal = function(root){
  let inOrder = [];
   let stack = [];
   let node = root;
 
   while (node !== null || !stack.length == 0 ) {
     if(node !== null){
       stack.push(node);
       node = node.left;
     }else {
     node = stack.pop();
     inOrder.push(node.value);
     node = node.right;
     }
   }
   return inOrder;
 }


// Example usage
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);


let output = inorderTraversal(root);
console.log(output); // Output: [ 2, 1, 3 ]
