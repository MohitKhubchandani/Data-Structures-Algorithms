class Node{
  constructor(key) {
    this.value = key;
    this.left = null;
    this.right = null;
  }
}


var rootToLeaf = function(root , arr , n) {
if(root == null)return false
arr.push(root.value)
if(root.value === n)return true
if(rootToLeaf(root.left , arr , n) || rootToLeaf(root.right , arr , n)){
  return true
}
arr.pop()
return false
};

var Traversal = function(root , n){
  let arr = [];
  rootToLeaf(root,arr , n)
  return arr;
}
debugger
// Input : - [1,2,3]
let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.right.left = new Node(4)
root.right.right = new Node(5)
const Output = Traversal(root , 5);
console.log(Output); // Output :- [ 1, 3, 5 ]