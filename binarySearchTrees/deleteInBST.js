class TreeNode {
    constructor(val) {
       this.val = val;
       this.left = null;
       this.right = null;
    };
 };

function deleteInBST(root, key) {
   if (root == null) {
      return null;
   };

   if(root.val == key){
      return helper(root);
   }

   let dummy = root;

   while (true) {
      if(root.val > key){
         if(root.left !== null && root.left.val == key){
            root.left = helper(root.left);
            break;
         }else{
            root = root.left;
         }
      }else{
         if(root.right !== null && root.right.val == key){
            root.right = helper(root.right);
            break;
         }else{
            root = root.right;
         }
      }
   }
   return dummy;
};

function helper(root){
   if (root.left === null) {
      return root.right;
   } else if(root.right === null){
      return root.right;
   };
   let rightChild = root.right;
   let lastRightChild = findLastRight(root.left)
   lastRightChild.right = rightChild;
   return root.left;
};

function findLastRight(root){
   if(root.right == null){
      return root;
   }
   return findLastRight(root.right);
};


let root = new TreeNode(1);
root.right = new TreeNode(2);

const key = 1;
const Output = deleteInBST(root, key);
console.log(Output) // Output :- TreeNode { val: 2, left: null, right: null }
