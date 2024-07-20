class Node{
  constructor(key) {
    this.value = key;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(10)
root.left = new Node(20)
root.right = new Node(30)
root.right.left = new Node(50)
console.log(root.value);