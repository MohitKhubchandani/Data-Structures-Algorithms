class Node{
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let linkedList = function(arr){
  let head = new Node(arr[0]);
  let mover = head
  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i]);
    mover.next = temp; 
    mover = temp; 
  }
  return head;
};

var reverseList = function(head) {
  if (head == null || head.next == null) return head;
  let newhead = reverseList(head.next);
  let front = head.next;
  front.next = head;       
  head.next = null;   
  return newhead;
};

function addOne(head){
    head = reverseList(head);
    let temp = head;
    let carry = 1;
    while(temp !== null){
      let add =  temp.data + carry;
      if(add >= 10){
        temp.data = 0;
        carry = 1;
        temp = temp.next;
      }else{ 
      temp.data = add;
      carry = 0;
      temp = temp.next;
      }
    }
  if(carry == 1){
    let node = new Node(1);
    head = reverseList(head);
    node.next = head;
    return node;
  }
  head = reverseList(head)
  return head;
}

function helper(temp){
  if(temp == null){
    return 1;
  }
  let carry = helper(temp.next);
  temp.data = temp.data + carry;
  if(temp.data < 10){
    return 0;
  }
  temp.data = 0;
  return 1;
}

function addOneRecursive(head){
  let carry = helper(head);
  if(carry == 1){
    let newNode = new Node(1);
    newNode.next = head;
    return newNode
  }  
  return head;
}

let print = function(head){
  while(head != null){
    console.log(head.data);
    head = head.next;
  }
}
debugger
const arr = [1,0,4]
let head = linkedList(arr);
head = addOneRecursive(head);
print(head); // Output :-  1 0 5 
