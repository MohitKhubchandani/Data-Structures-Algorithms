class Node {
  constructor(key) {
    this.val = key;
    this.left = null;
    this.right = null;
  }
}

function maxWidth(root) {
  if (root == null) return 0;
  let ans = 0;
  let q = [{ node: root, position: 0 }];
  while (q.length !== 0) {
    let size = q.length;
    let mmin = q[0].position;
    let first = 0, last = 0;
    for (let i = 0; i < size; i++) {
      let cur_id = q[0].position - mmin;
      let node = q[0].node;
      q.shift();

      if (i === 0) {
        first = cur_id;
      }
      if (i === size - 1) {
        last = cur_id;
      }

      if (node.left) {
        q.push({ node: node.left, position: 2 * cur_id + 1 });
      }
      if (node.right) {
        q.push({ node: node.right, position: 2 * cur_id + 2 });
      }
    }
    ans = Math.max(ans, last - first + 1);
  }
  return ans;
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

let output = maxWidth(root);
console.log(output); // Output: 4
