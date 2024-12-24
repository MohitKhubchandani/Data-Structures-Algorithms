class TreeNode {
    constructor(val) {
       this.val = val;
       this.left = null;
       this.right = null;
    };
 };

function inOrderSuccessor(root, p){
    let successor = null;

    while (root != null) {
        if (p.val >= root.val) {
            root = root.right
        }else{  
            successor = root;
            root = root.left
        }
    }
    return successor ? successor.val : null;
}

const root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);

let Output = inOrderSuccessor(root, root);
console.log(Output) //Output :- 4
