class TreeNode {
    constructor(val) {
       this.val = val;
       this.left = null;
       this.right = null;
    };
 };

 function floorInBST(root, key){

    let floor = -1;

    while(root){

        if(root.val == key){
            floor = root.val;
            return floor;
        }

        if(root.val < key){
            floor = root.val;
            root = root.right;
        }else{
            root = root.left;
        }
    }
    return floor;
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

const Output = floorInBST(root, 15);
console.log(Output) // Output :- 14
