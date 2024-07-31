class Node{
  constructor(key) {
    this.value = key;
    this.left = null;
    this.right = null;
  }
}

function leftView(root,arr,level){
  if(!root)return;
  if(level == arr.length){
    arr.push(root.value)
  }
  let lft = leftView(root.left,arr,level + 1)
  let rght = leftView(root.right,arr,level + 1)


}

let lv = function(root){
 let arr = [];
 let level = 0
leftView(root,arr , level);
return arr;
}

debugger
let root = new Node(10)
root.left = new Node(20)
root.left.left = new Node(20)

root.right = new Node(30)
root.right.right = new Node(30)
root.right.right.right = new Node(30)

let Output = lv(root);
console.log(Output);