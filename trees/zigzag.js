class Node{
  constructor(key) {
    this.value = key;
    this.left = null;
    this.right = null;
  }
}


function zigzag(root) {
  if (root == null) return [];
  
  let result = [];
  let currentLevel = [root];
  let count = 0;

  while (currentLevel.length !== 0) {
    let levelValues = [];
    let nextLevel = [];

    for (let i = 0; i < currentLevel.length; i++) {
      let node = currentLevel[i];
      levelValues.push(node.value);

      if (count % 2 == 0) {
        if (node.left) nextLevel.push(node.left);
        if (node.right) nextLevel.push(node.right);
      } else {
        if (node.right) nextLevel.push(node.right);
        if (node.left) nextLevel.push(node.left);
      }
    }

    result.push(levelValues);
    currentLevel = nextLevel.reverse();
    count++;
  }

  return result;
}

function a(){
let root = new Node(1)
root.left = new Node(2)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right = new Node(3)
root.right.left = new Node(6)
root.right.right = new Node(7)
const Output = zigzag(root)
console.log(Output);
}
function b(){
let root = new Node(3)
root.left = new Node(9)
root.right = new Node(20)
root.right.left = new Node(15)
root.right.right = new Node(7)
const Output = zigzag(root)
console.log(Output);}

function c(){
let root = new Node(1)
root.left = new Node(2)
root.left.left = new Node(4)
root.right = new Node(3)
root.right.right = new Node(5); 
const Output = zigzag(root)
console.log(Output);}
a() // Output :- [ [ 1 ], [ 3, 2 ], [ 4, 5, 6, 7 ] ]

b() // Output :- [ [ 3 ], [ 20, 9 ], [ 15, 7 ] ]

c() // Output :- [ [ 1 ], [ 3, 2 ], [ 4, 5 ] ]