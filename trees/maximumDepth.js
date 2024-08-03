class Node{
  constructor(key) {
    this.root = key;
    this.left = null;
    this.right = null;
  }
}

// function maximumDepth(root){
// let level = 0;
// let queue = [root];
// while(queue.length !== 0){
//   let temp = [];
//   let len = queue.length;
//   for (let i = 0; i < len; i++) {
//     let node = queue.shift();
//     if(node.left !== null){
//       queue.push(node.left);
//     }
//     if(node.right !== null){
//       queue.push(node.right);
//     }
//   }
//   level++
// }
// return level;
// }

function maximumDepth(root){
  if(root == null)return null
let lh = maximumDepth(root.left)
let rh = maximumDepth(root.right)
return 1 + Math.max(lh,rh)
}

debugger
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(6);
root.right.left.left = new Node(5);
const Output = maximumDepth(root);
console.log(Output);