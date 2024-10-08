class Node{
  constructor(key) {
    this.value = key;
    this.left = null;
    this.right = null;
  }
}

function verticalOrderTraversal(root){
  let nodes = new Map();

  let todo  = [[root,[0]]];

  while(todo.length !== 0) {

    let [temp,[level]] = todo.shift()

    if(nodes.has(level) == false){
      nodes.set(level , temp.value);
    }

    if(temp.left){
      todo.push(
        [
        temp.left,[level - 1]
      ]
    )
    }
  
    if(temp.right){
      todo.push(
        [
        temp.right,[level + 1]
      ]
    )
    }
  
  }
  let sortedVerticalKeys = Array.from(nodes.keys()).sort((a, b) => a - b);

  let result = sortedVerticalKeys.map(key => nodes.get(key));

  return result;
  
}

let root = new Node(10)
root.left = new Node(20)
root.right = new Node(30)
root.left.left = new Node(40)
root.left.right = new Node(50)
root.right.left = new Node(60)
root.right.right = new Node(70)
const Output = verticalOrderTraversal(root);
console.log(Output); // Output :- [ 40, 20, 10, 30, 70 ]
