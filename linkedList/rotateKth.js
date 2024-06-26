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

function findKthNode(head , k){
  let count = 1;
 while(head !== null){
  if(count == k)return head;
  else{
    head = head.next;
    count++;
  }
}
 return head;
}

var reverseKGroup = function(head, k) {
  if(head == null && head.next == null)return head;
  let temp = head;
  let nextNode , prevNode;
  while(temp !== null){
    let kthNode = findKthNode(temp , k);
    if(kthNode == null){
      if(prevNode)prevNode.next = temp;
      break
    }
    nextNode = kthNode.next;
    kthNode.next = null;
    reverseList(temp);
    if(temp == head){
      head = kthNode;
    }else{
      prevNode.next = kthNode;
    }
    prevNode = temp;
      temp = nextNode;
  }
  return head;
};

let print = function(head){
  while(head != null){
    console.log(head.data);
    head = head.next;
  }
}
debugger
const arr = [1,2,3,4];
let head = linkedList(arr);
head = reverseKGroup(head,3);
print(head);