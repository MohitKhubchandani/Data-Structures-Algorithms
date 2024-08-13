class Node{
  constructor(key) {
    this.value = key;
    this.left = null;
    this.right = null;
  }
}

var sameTree = function(p , q) {
  
  if (p === null && q === null) {
    return true;
  }
  

  if (p === null || q === null) {
    return false;
  }
  let ls = sameTree(p.left , q.left)
  let rs = sameTree(p.right , q.right)
  if(p.value !== q.value){
    return false
  }
  return ls && rs
};


   p = new Node(1)
   p.left = new Node(2)
   p.left.right = new Node(3)

   q = new Node(1)
   q.left = new Node(2)
   q.left.right = new Node(3)

const Output = sameTree(p , q);
console.log(Output); // Output :- true;
