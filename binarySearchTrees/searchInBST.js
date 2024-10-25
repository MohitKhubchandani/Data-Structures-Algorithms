class TreeNode {
   constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
   };
};

function searchInBST(root, val){
   if(root == null || root.val == val)return root;
    
   if(root.val > val)return searchInBST(root.left, val);
        
   return searchInBST(root.right, val);
}

let root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(8);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(10);

const Output = searchInBST(root, 8);
console.log(Output) /** Output :- 
TreeNode {
   val: 8,
   left: TreeNode { val: 6, left: null, right: null },
   right: TreeNode { val: 10, left: null, right: null }
 } */
