class Node {
  constructor(key) {
    this.value = key;
    this.left = null;
    this.right = null;
  }
}

function lca(root, p, q) {
  if (root == null || root.value == p || root.value == q) {
    return root;
  }

  let leftLca = lca(root.left, p, q);
  let rightLca = lca(root.right, p, q);

  if (leftLca != null && rightLca != null) {
    return root;
  }

  return leftLca != null ? leftLca : rightLca;
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);

let output = lca(root, 40, 50);
console.log(output.value); // Output: 20
