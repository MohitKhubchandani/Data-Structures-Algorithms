class TreeNode {
    constructor(val) {
       this.val = val;
       this.left = null;
       this.right = null;
    };
 };

function inOrderSuccessor(root, p){
    let predecessor = null;

    while (root != null) {
        if (p.val > root.val) {
            predecessor = root;
            root = root.right
        }else{
            root = root.left
        }
    }
    return predecessor ? predecessor.val : null;
}

const root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);

let Output = inOrderSuccessor(root, root.right);
console.log(Output)// Output :- 3
