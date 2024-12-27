let stack = [];

var BSTIterator = function(root) {
    pushAll(root)    
};

BSTIterator.prototype.next = function (node) {
    let tempNode = stack.pop();
    pushAll(tempNode.right);
    return tempNode.val;
};

BSTIterator.prototype.hasNext = function () {
    return stack.length > 0;
};

function pushAll(node) {
    while(node !== null){
        stack.push(node);
        node = node.left;
    };
}

let root = {
    val: 7,
    left: {
        val: 3,
        left: null,
        right: null,
    },
    right: {
        val: 15,
        left: {
            val: 9,
            left: null,
            right: null,
        },
        right: {
            val: 20,
            left: null,
            right: null,
        },
    },
};

let iterator = new BSTIterator(root);
let result = [null];

result.push(iterator.next());    // 3
result.push(iterator.next());    // 7
result.push(iterator.hasNext()); // true
result.push(iterator.next());    // 9
result.push(iterator.hasNext()); // true
result.push(iterator.next());    // 15
result.push(iterator.hasNext()); // true
result.push(iterator.next());    // 20
result.push(iterator.hasNext()); // false

console.log(result); // [ null, 3, 7, true, 9, true, 15, true, 20, false ]  
