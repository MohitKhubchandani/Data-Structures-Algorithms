class TreeNode {
    constructor(val) {
       this.val = val;
       this.left = null;
       this.right = null;
    };
 };

function isBST(root){
    return isBSTUtil(root, Number.MIN_VALUE, Number.MAX_VALUE)
};

function isBSTUtil(node, min, max){
    if(!node){
        return true;
    };

    if(node.val < min || node.val > max){
        return false
    };

    return isBSTUtil(node.left, min, node.val-1) && isBSTUtil(node.right, node.val+1, max)
}

let root = new TreeNode(5);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(6);


const Output = isBST(root);
console.log(Output) // Output :- false
