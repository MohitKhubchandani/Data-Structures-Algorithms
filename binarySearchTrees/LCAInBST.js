class TreeNode {
    constructor(val) {
       this.val = val;
       this.left = null;
       this.right = null;
    };
 };

function lowestCommonAncestor(root, p, q) {
    if (root == null) {
        return null;
    };
    let cur = root

    if (cur.val > p.val && cur.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    if (cur.val < p.val && cur.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
        return root.val;
};


const root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);

const p = root.left;
const q = root.left.right;
const Output = lowestCommonAncestor(root, p, q);
console.log(Output) // Output :- 2
