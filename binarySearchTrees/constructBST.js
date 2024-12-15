class TreeNode {
    constructor(val) {
       this.val = val;
       this.left = null;
       this.right = null;
    };
 };

 var bstFromPreorder = function(preorder) {
    let i = 0;
    return build(preorder, Number.MAX_SAFE_INTEGER)

    
    function build(arr, bound){
    if(i == arr.length || arr[i] > bound) return null;
    let root = new TreeNode(arr[i]);
    i++
    root.left = build(arr, root.val);
    root.right = build(arr, bound);
    return root;
 }
};


const preorder = [8,5,1,7,10,12];
const Output = bstFromPreorder(preorder);
console.log(Output); /**
Output :- 

TreeNode {
  val: 8,
  left: TreeNode {
    val: 5,
    left: TreeNode { val: 1, left: null, right: null },
    right: TreeNode { val: 7, left: null, right: null }
  },
  right: TreeNode {
    val: 10,
    left: null,
    right: TreeNode { val: 12, left: null, right: null }
  }
}

*/
