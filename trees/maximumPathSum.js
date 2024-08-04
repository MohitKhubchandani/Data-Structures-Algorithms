class Node{
  constructor(key) {
    this.val = key;
    this.left = null;
    this.right = null;
  }
}



function maxPathSum(root){
  var max =-Infinity;

function maximumPathSum(root){
if(root == null)return 0;

let left = maximumPathSum(root.left);
let right = maximumPathSum(root.right);

max = Math.max(max , left + right + root.val);

return  Math.max(0,root.val + left , root.val + right);

}

maximumPathSum(root);
  return max
}

let root = new Node(1)
root.left = new Node(2)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right = new Node(3)
root.right.left = new Node(6)
root.right.right = new Node(7)


let Output = maxPathSum(root)
console.log(Output); // Output :- 18