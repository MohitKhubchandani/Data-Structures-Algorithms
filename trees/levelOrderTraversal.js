class Node{
    constructor(key) {
      this.val = key;
      this.left = null;
      this.right = null;
    }
  }

function levelOrderTraversal(root){
    let level = [];
    let stack = [root];
    while(stack.length !== 0){
      let len = stack.length;
      let temp = [];
      for (let i = 0; i < len; i++) {
        let node = stack.shift();
        temp.push(node.val);
        if(node.left !== null){stack.push(node.left)}
        if(node.right !== null){stack.push(node.right)}
      }
      level.push(temp)
    }
    return level
}


let root = new Node(1)
root.left = new Node(2)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right = new Node(3)
root.right.left = new Node(6)
root.right.right = new Node(7)
let Output = levelOrderTraversal(root);
console.log(Output); // Output :- [ [ 1 ], [ 2, 3 ], [ 4, 5, 6, 7 ] ]