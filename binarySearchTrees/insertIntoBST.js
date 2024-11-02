class TreeNode {
    constructor(val) {
       this.val = val;
       this.left = null;
       this.right = null;
    };
 };

function insertIntoBST(root, val){

    if(root == null)return new TreeNode(val);
    let cur = root;

    while (true) {
        
        if(cur.val <= val){
            
            if(cur.right !== null){
                cur = cur.right;
            }else {
            cur.right = new TreeNode(val) 
            break;
          }
       }else{

            if(cur.left !== null){
                cur = cur.left;
            }else{
            cur.left = new TreeNode(val);
            break;
         }
       }
    }
    
    return cur;

}


let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

const Output = insertIntoBST(root, 6);
console.log(Output) /** TreeNode {
    val: 7,
    left: TreeNode { val: 6, left: null, right: null },
    right: null
  } */
