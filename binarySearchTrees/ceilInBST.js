class TreeNode {
    constructor(val) {
       this.val = val;
       this.left = null;
       this.right = null;
    };
 };

 function ceilInBST(root, key){
    let ceil = -1;

    while(root){

        if(root.val == key){
            ceil = root.val;
            return ceil;
        }

        if(root.val > key){
            ceil = root.val;
            root = root.left;
        }else{
            root = root.right;
        }
    }
    return ceil;
 }

let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(13);
root.left.left = new TreeNode(3);
root.left.left.left = new TreeNode(2);
root.left.left.right = new TreeNode(4);
root.left.right = new TreeNode(6);
root.left.right.right = new TreeNode(9);
root.right.left = new TreeNode(11);
root.right.right = new TreeNode(14);

const Output = ceilInBST(root, 8);
console.log(Output) // Output :- 9
