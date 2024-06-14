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

let print = function(head){
  while(head != null){
    console.log(head.data);
    head = head.next;
  }
}

const arr = [1,2,3,4];
let head = linkedList(arr);
head = reverseList(head);
print(head);
