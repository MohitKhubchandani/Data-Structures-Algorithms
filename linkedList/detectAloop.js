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

function detectAloop(head){
  let slow = head;
  let fast = head;
  while(fast != null && fast.next != null){
    slow = slow.next;
    fast = fast.next.next;
    if(fast == slow)return true;
  }
  return false;
}

function print(head){
  while (head != null) {
    console.log(head.data);
    head = head.next;
  }
}
debugger
const head = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);
const fifth = new Node(5);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
// Create a loop
fifth.next = head;
let headd = linkedList(head);
if (detectAloop(head)) {
  console.log("Loop detected in the linked list.");
} else {
  console.log("No loop detected in the linked list.");
} // Output :- Loop detected in the linked list.