class Node{
  constructor(key) {
    this.value = key;
    this.left = null;
    this.right = null;
  }
}

function lca(root , p, q){
  if(root == null || root.value == p || root.value == q){
    return root;
  }

  let lft = lca(root.left , p , q);
  let rght = lca(root.right , p , q);

  if(lft == null)return rght;
  else if(rght == null)return lft;
  else return root
}


let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);

let Output = lca(root , 40 , 50);
console.log(Output.value); // Output :- 20