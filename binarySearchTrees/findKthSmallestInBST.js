class TreeNode {
    constructor(val) {
       this.val = val;
       this.left = null;
       this.right = null;
    };
 };

 let res = 0;

function inorder(node, k, counter){
    if(!node)return;

    inorder(node.left, k, counter);

    counter.count++

    if (counter.count === k) {
        res = node.val
    };

    inorder(node.right, k, counter);

}

function findKthSmallestInBST(root, k) {
    let counter = {count: 0};
    inorder(root, k, counter);
    return res;
};

debugger
const root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);

root.left.right = new TreeNode(2);

const k = 3;
const Output = findKthSmallestInBST(root, k);
console.log(Output) // Output :- 3
